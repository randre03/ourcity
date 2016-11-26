/**
 * Created by randre03 on 11/26/16.
 */
var Future = Npm.require('fibers/future');

Meteor.methods({
    createTrialCustomer: function(customer){
        check(customer, {
            name: String,
            emailAddress: String,
            password: String,
            plan: String,
            token: String
        });

        const emailRegex     = new RegExp(customer.emailAddress, "i");
        const lookupCustomer = Meteor.users.findOne({"emails.address": emailRegex});

        if ( !lookupCustomer ) {
            var newCustomer = new Future();

            Meteor.call('stripeCreateCustomer', customer.token, customer.emailAddress, function(error, stripeCustomer){
                if (error) {
                    console.log(error);
                } else {
                    const customerId = stripeCustomer.id,
                          plan       = customer.plan;

                    Meteor.call('stripeCreateSubscription', customerId, plan, function(error, response){
                        if (error) {
                            console.log(error);
                        } else {
                            // If all goes well with our subscription, we'll handle it here.
                        }
                    });
                }
            });
            return newCustomer.wait();
        } else {
            throw new Meteor.Error('customer-exists', 'Sorry, that customer email already exists!');
        }
    }
});

Meteor.call('stripeCreateSubscription', customerId, plan, function(error, response){
    if (error) {
        console.log(error);
    } else {
        try {
            const user = Accounts.createUser({
                email: customer.emailAddress,
                password: customer.password,
                profile: {
                    name: customer.name,
                }
            });

            const subscription = {
                customerId: customerId,
                subscription: {
                    plan: {
                        name: customer.plan,
                        used: 0
                    },
                    payment: {
                        card: {
                            type: stripeCustomer.sources.data[0].brand,
                            lastFour: stripeCustomer.sources.data[0].last4
                        },
                        nextPaymentDue: response.current_period_end
                    }
                }
            }

            Meteor.users.update(user, {
                $set: subscription
            }, function(error, response){
                if (error){
                    console.log(error);
                } else {
                    newCustomer.return(user);
                }
            });
        } catch(exception) {
            newCustomer.return(exception);
        }
    }
});
