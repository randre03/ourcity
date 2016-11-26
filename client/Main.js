/**
 * Created by randre03 on 11/26/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <h1>Hello there! This is my App.</h1>
    );
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});