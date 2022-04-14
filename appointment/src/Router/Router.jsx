import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Doctores from '../Components/Doctores'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path=':id' element={<Doctores/>} />
        </Routes>
    </div>
  )
}

export default Router