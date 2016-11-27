/**
 * Created by randre03 on 11/26/16.
 */

import React from 'react';

const Signup = () => {

    return (
        <div>
            <form id="application-signup" className="signup">
                <h4 className="page-header">Account details</h4>
                <div className="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" name="fullName" className="form-control" placeholder="Full Name"/>
                </div>

                <div className="form-group">
                    <label for="emailAddress">Email Address</label>
                    <input type="email" name="emailAddress" className="form-control"
                           placeholder="Email Address"/>
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password"/>
                </div>

                <h4 className="page-header">Payment Information</h4>
                <label>Which plan sounds <em>amazing</em>?</label>
                {/*{{ > selectPlan}}*/}
                <div className="form-group">
                    {/*{{ > Template.dynamic template="creditCard" data="signup"}}*/}
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success btn-block"
                           data-loading-text="Setting up your trial..."
                           style="margin-top: 40px; margin-bottom: 20px;"
                           value="Put me on the rocketship"/>
                </div>

            </form>
        </div>
    );
};

export default Signup;