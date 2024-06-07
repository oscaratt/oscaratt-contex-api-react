import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { About } from '../components/About'
import { Contac } from '../components/Contac'
import { Articles } from '../components/Articles'
import { ErrorPage } from '../components/ErrorPage'

export const AppRouter = () => {
  return (
    <Router>
      {/* Menú de navegación */}

      {/* Configurar las rutas */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Inicio' element={<Home/>}></Route>
        <Route path='/Articulos' element={<Articles/>}></Route>
        <Route path='/Acerca-de' element={<About/>}></Route>
        <Route path='/Contacto' element={<Contac/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<ErrorPage/>}>
        </Route>
      </Routes>
    </Router>
  )
}


