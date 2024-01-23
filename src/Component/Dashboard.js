import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const[message,setMessage]=useState('')
    const navigate = useNavigate()

    useEffect(()=>{
       const token=localStorage.getItem('token')
       console.log("token",token)

       if(!token){
        navigate('./login')
       }
       else{
        axios.get('https://backendhandson4project.onrender.com/pages/dashboard',
        {headers:{
            authorization:`Bearer ${token}`,
        },
        })
        .then(res=>{
            const responseData=res.data;
            alert(responseData.msg)
            setMessage(responseData.msg)
        })
       }
    },[navigate])
  return (
    <div>
     <h1 className='home'>Meri Duniya Me Aapka Swagat hai</h1>
     <p className='msg'>{message}</p>
    </div>
  )
}
