import { current } from '@reduxjs/toolkit';
import React,{useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom";


const LoadRedirect = () => {
    const [count,setCount]=useState(2);
    const navigate= useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=>currentCount-1)
        },1000);
        count === 0 && navigate("/auth");
        return()=>clearInterval(interval);
    },[count,navigate]);

    return (
    <div>LoadRedirect</div>
  )
}

export default LoadRedirect