import * as React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { observer } from 'mobx-react';
import { authstore } from '../../store/Authstore';


@observer class Login extends React.Component  {
 render () {    
     return <section >
         <LoginForm />
         </section>
 }
}

export default Login;