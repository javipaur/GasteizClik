import React from 'react'
import {useNavigate} from 'react-router-dom';
import './login.scss';
export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = ()=>{
    navigate('/Home',{replace:true});
  }

  return (
    <>
       <div className="login">
   <div className="wrap">
        <form className="login-form" action="">
            <div className="form-header">
                <h3>GasteizClik Login</h3>
                <p>Inicia sesion para acceder al panel de administración</p>
            </div>
           
            <div className="form-group">
                <input type="text" className="form-input" placeholder="email@example.com"/>
            </div>
           
            <div className="form-group">
                <input type="password" className="form-input" placeholder="password"/>
            </div>
   
            <div className="form-group">
                <button className="form-button" onClick={onLogin} type="submit">Login</button>
            </div>
            <div className="form-footer">
            No tienes cuenta? <button>Registrate!</button>
            </div>
        </form>
    </div>
    </div>
    </>
   
  )
}
