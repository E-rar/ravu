import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { useAuth } from './contexts/AuthContext'



const routing = () =>{
   
    const { currentUser, appIsReady } = useAuth()
    if(!currentUser){
      return (
        <>
        <Route path='/login' element={<Login/>}/> 
        
        </>
      )
    
    }
    else if(currentUser){
      return (
        <>
        <Route path='/login' element={<Home/>}/>  
        </>
      )
    }
  }

const Pagerouter = () => {  
    
    return ( 
    <Routes>
      {routing()}
    </Routes>
     );
}
 
export default Pagerouter;