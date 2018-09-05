import * as React from 'react';

import './Root.scss';

import  Register  from '../../containers/Register/Register';
import  Login  from '../../containers/Login/Login';

import Dashboard from '../../containers/Dashboard/Dashboard';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

export class Root extends React.Component {
  
    render(){
        return (
            <Router>
            <section>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
          </section>
          </Router>
        )
    }
}























