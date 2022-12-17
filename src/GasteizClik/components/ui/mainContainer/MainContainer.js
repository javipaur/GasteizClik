import React from 'react';
import {  Route, Routes } from 'react-router-dom'

import { ConfigPage } from '../../../pages/ConfigPage';
import { EventsPage } from '../../../pages/EventsPage';
import { HomePage } from '../../../pages/HomePage';
import { ProgramPage } from '../../../pages/ProgramPage';
import { UsersPage } from '../../../pages/UsersPage';
import { LateralMenu } from '../lateral/LateralMenu';

import './mainContainer.scss';


export const MainContainer = () => {
  return (
    <>
<div className="wrapper">
<LateralMenu/>
<main>
<Routes>
        <Route path='events' element={<EventsPage/>}/> 
        <Route path='program' element={<ProgramPage/>}/> 
        <Route path='users' element={<UsersPage/>}/> 
        <Route path='config' element={<ConfigPage/>}/> 
        <Route path='Home' element={<HomePage/>}/> 
</Routes>
</main>

</div>

</>
  )
}
