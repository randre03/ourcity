/**
 * Created by randre03 on 11/26/16.
 */

import React from 'react';

const SelectPlan = () => {
    return (
        <div className="list-group select-plan">
            {{#each plans}}
            <a href="#" className="list-group-item">
                <input type="radio" name="selectPlan" id="selectPlan_{{name}}" value="{{name}}">
                    {{capitalize name}}: {{limitString limit}} <span
                    className="pull-right">{{amount.usd}} / {{interval}}</span>
            </a>
            {{ /each}}
        </div>
    );
};

export default SelectPlan;