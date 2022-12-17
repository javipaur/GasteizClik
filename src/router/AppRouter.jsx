import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { GasteizClikRoutes } from '../GasteizClik/routes/GasteizClikRoutes'
import { BrandPage } from '../pages/BrandPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AppRouter = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<BrandPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="register" element={<RegisterPage/>}/> 
      <Route path="/*" element={<GasteizClikRoutes/>}></Route>
      </Routes>
    </>
  )
}
