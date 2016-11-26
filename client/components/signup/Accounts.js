import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

// This pattern is how to use React with 3rd Party libs
// like Blaze (incl. accounts-ui), D3, jQuery, etc
class Accounts extends Component {
    componentDidMount() {
        // Render Blaze accounts form
        // Find div just rendered in render method and place
        // Blaze accounts form into that div
        // we use Template.loginButtons instead of {> loginButtons} since using React
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        // Find forms created and destroy them
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
};



export default Accounts;