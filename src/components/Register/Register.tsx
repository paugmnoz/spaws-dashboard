import * as React from 'react';

interface Props {
    email:string;
    password:string;
    register:any;
    handleChangeEmail:any;
    handleChangePass:any;
    goToLogin:any;
}
const Register = (props:Props) => {
    return (
        <section>
            <div>
                <h1>Registro</h1>
            </div>
            <form action="" onSubmit={props.register}>
            <input type="email" placeholder="correo" value={props.email} onChange={props.handleChangeEmail}/>
            <input type="password" name="" id="" placeholder="constraseña"  value={props.password} onChange={props.handleChangePass}/>
            <button type="submit">Registrar</button>
            <button type="submit" onClick={props.goToLogin}>Login </button>
            </form>
            </section>
    )
};

export default Register;