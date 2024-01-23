import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
   const[email,setEmail] = useState('')
   const[password,setPassword]=useState('')
   const navigate = useNavigate()


   const handleClick=()=>{
    try{
    const response = axios.post('https://backendhandson4project.onrender.com/pages/register',{email,password})
    .then((res)=>{
         console.log(res.data)
         if(res.data.msg === "This email is already exist"){
            alert("go to login user exist")
            navigate('/login')
         }else{
            localStorage.setItem("token",res.data.token)
         }
    })
    console.log(response.data)
}catch(err){
    console.log("registration failed",err)
}
   }
  return (
    <div className='register'>
        <input className='input' type='text' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/> 
        <input className='input'type='text' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <button className='btn'onClick={handleClick}>Register</button>


    </div>
  )
}
