import * as React from 'react';

import './Root.scss';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

import  Register  from '../../containers/Register/Register';
import  Login  from '../../containers/Login/Login';

import Dashboard from '../../containers/Dashboard/Dashboard';


export class Root extends React.Component {
  
    render(){
        return (
            <Router>
            <section>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </section>
          </Router>
        )
    }
}























