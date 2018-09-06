import * as React from 'react';

import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import { authstore } from '../../store/AuthStore';

interface ILoginProps {

}
const LoginForm = withRouter(observer((ILoginProps) => {
    return (
        <section>
            <div>
            <h1>Login</h1>
            </div>
            <form action="" onSubmit=  {(e)=>{
            e.preventDefault();
            authstore.login();
            if(authstore.redirectDash){
                ILoginProps.history.push("/dashboard");
            }
        } }>
            <input type="text" placeholder="username" onChange={(e) => authstore.handleUsername(e.target.value)}  />
            <input type="password" name="" id="" placeholder="constraseña" onChange={(e) => authstore.handlePassword(e.target.value)} />
            <button type="submit">Iniciar sesión</button>
            </form>
           

            </section>
    )
}))

export default LoginForm;