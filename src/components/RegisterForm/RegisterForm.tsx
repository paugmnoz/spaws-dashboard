import * as React from 'react';
import './RegisterForm.scss';

import { observer } from 'mobx-react';

import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import { authstore } from '../../store/AuthStore';

interface IRegisterProps {

}
const RegisterForm = observer(withRouter((IRegisterProps) => {
    return (
        <section>
            <img className="shiba-floating" src="" alt=""/>
        <section className="register-form" >
        
            <div>
                
                <img  src="" alt=""/>
            </div>
            <form action="" onSubmit=  {(e)=>{
            e.preventDefault();
            authstore.register();
            IRegisterProps.history.push("/dashboard");
        }}>
            <p>Nombre de usuario:</p>
            <input type="text" placeholder="nombre de usuario" onChange={(e) => authstore.handleUsername(e.target.value)} /> 
            <p>Contraseña:</p>
            <input type="password" name="" id="" placeholder="constraseña" onChange={(e) => authstore.handlePassword(e.target.value)}/>
            <button className="dark" type="submit" >Registrar </button> <br/>
            <p className="p-c">¿Ya tienes una cuenta?</p>
            <Link to="/login"><button type="submit" >Login </button></Link>
            </form>
            </section>
            </section>

    )
}))

export default RegisterForm;