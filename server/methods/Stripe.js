/**
 * Created by randre03 on 11/26/16.
 */
const secret = Meteor.settings.private.stripe.testSecretKey;
const Stripe = StripeAPI(secret);

stripeCreateCustomer: function(token, email){
    // Note: we'd check() both of our arguments here, but I've stripped this out for the sake of brevity.

    const stripeCustomer = new Future();

    Stripe.customers.create({
        source: token,
        email: email
    }, function(error, customer){
        if (error){
            stripeCustomer.return(error);
        } else {
            stripeCustomer.return(customer);
        }
    });

    return stripeCustomer.wait();
}

stripeCreateSubscription: function(customer, plan){
    // Again, we'd do a check() here. Don't skip it!

    const stripeSubscription = new Future();

    Stripe.customers.createSubscription(customer, {
        plan: plan
    }, function(error, subscription){
        if (error) {
            stripeSubscription.return(error);
        } else {
            stripeSubscription.return(subscription);
        }
    });

    return stripeSubscription.wait();
}
