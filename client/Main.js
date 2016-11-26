/**
 * Created by randre03 on 11/26/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import NoUser from './components/NoUser';
import MapMain from './components/MapMain';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={NoUser} />
            {/* /bins is a child route (since nested) which gets passed via props.children (see App.js)*/}
            <Route path="maps/:mapId" component={MapMain}/>
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});