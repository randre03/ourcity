/**
 * Created by randre03 on 11/26/16.
 */

import React from 'react';

const CreditCard = () => {
    return (
    <div>
        <div className="row">
            <div className="col-xs-12">
                <div className="form-group">
                    <label className="text-success"><i class="fa fa-lock"></i> Card Number (Secure)</label>
                    <input type="text" data-stripe="cardNumber" className="form-control card-number" placeholder="Card Number"/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-4">
                <label>Exp. Mo.</label>
                <input type="text" data-stripe="expMo" className="form-control exp-month" placeholder="Exp. Mo."/>
            </div>

            <div className="col-xs-4">
                <label>Exp. Yr.</label>
                <input type="text" data-stripe="expYr" className="form-control exp-year" placeholder="Exp. Yr."/>
            </div>

            <div className="col-xs-4">
                <label>CVC</label>
                <input type="text" data-stripe="cvc" className="form-control cvc" placeholder="CVC"/>
            </div>

        </div>
    </div>
    );
};

export default CreditCard;