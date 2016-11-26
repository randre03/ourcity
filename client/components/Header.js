/**
 * Created by randre03 on 11/23/16.
 */
 
import React, { Component } from 'react';
import Accounts from './Accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

   render() {
       return (
           <nav className="nav navbar-default">
               <div className="navbar-header">
                   {/*This is how we create hyperlinks using React Router*/}
                   <Link to="/" className="navbar-brand">ourcity</Link>
               </div>
               <ul className="nav navbar-nav">
                   <Accounts />
               </ul>
           </nav>
       );
   }
};
 
export default Header;