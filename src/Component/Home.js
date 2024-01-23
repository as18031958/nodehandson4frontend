import React from 'react'
import {useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate()

    const handleClick=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <>
    <div className='home'>Welcome To Our World Of Odessy</div>
    <button className='btn' onClick={handleClick}>Logout</button>
    </>
  )
}
