import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import './navbar.scss';


export const NavBar = () => {


  const navigate = useNavigate();

   const onLogout =()=>{
    navigate('/login',{
      replace:true
    });
   }


  return (
<>
<header>
   <h1><NavLink to="/"> GasteizClik</NavLink></h1>
   <nav className="nav">
    <ul>
      <p>@NombreUsuario | <button onClick={onLogout}>Salir</button></p>
    {/* <NavLink className={({isActive}) =>`${isActive ? 'active' : ''}` } to="/login"> Login</NavLink>
    <NavLink className={({isActive}) =>`${isActive ? 'active' : ''}` } to="/Register"> Register</NavLink>
    */}
    </ul> 
</nav>       
</header>
</>
  )
}
