import React from 'react'
import{BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import {Home} from './Component/Home'
import {Register} from './Component/Register'
import {Login} from './Component/Login'
import {Dashboard} from './Component/Dashboard'
import './Component/style.css'

export const Routing = () => {
  return (
    <div>
      <nav className='nav'>
        <Router>
          <div>
          <ul type="none">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='register'>Register</Link></li>
        <li><Link to='login'>Login</Link></li>
        <li><Link to='dashboard'>Dashboard</Link></li>
        </ul>
        </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>

        </Routes>
        </Router>
        </nav>

    </div>
  )
}
