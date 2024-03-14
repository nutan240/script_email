import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import { BrowserEmail } from './BrowserEmail'
import Dashboard from './Dashboard'
function MainApp() {
  return (
    <>
  <Router>
     <Routes>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/' element={<Dashboard/>} />
        <Route path='/home' element={<BrowserEmail/>} />
     </Routes>
     </Router>
    </>
  )
}

export default MainApp