import React from 'react';
import {NavLink} from 'react-router-dom';
import './item.scss';
export const Item = ({text,path,icon}) => {
  
  return (
    <li>
    <NavLink  
       className={({isActive}) =>`${isActive ? 'active' : ''}` } 
       to={path}><i className='icon'>{icon}</i> {text}</NavLink>
    </li>

  )
}
