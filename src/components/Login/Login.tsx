import * as React from 'react';

interface Props {
    email:string;
    password:string;
    login:any;
    handleChangeEmail:any;
    handleChangePass:any;
    errorLogged:boolean;
}

const Login = (props:Props) => {
    return (
        <section>
            <div>
                <h1>Login</h1>
            </div>
            <form action="" onSubmit={props.login}>
            <input type="email" placeholder="correo" value={props.email} onChange={props.handleChangeEmail}/>
            <input type="password" name="" id="" placeholder="constraseña"  value={props.password} onChange={props.handleChangePass}/>
            <button type="submit">Entrar</button>
            </form>
            {props.errorLogged &&
                <div>
                    <h2>Las credenciales no son correctas</h2>
                </div>
            }
            </section>
    )
};

export default Login;