import React from 'react';

import Header from './Header';

export default (props) => {
    return (
        <div>
            <Header />
            {/*See note on main.js re: props.children*/}
            {props.children}
        </div>
    );
};