import * as React from 'react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

import { observer } from 'mobx-react';
import { authstore } from '../../store/Authstore';


@observer class Register extends React.Component   {
 
 render () {    
     return <section >
         <RegisterForm />
         </section>
 }
}

export default Register;