import React from 'react'

import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './course/Courses'
import Signup from './components/Signup'
import Contactus from './ContactUs/Contactus'
import Aboutus from './AboutUs/Aboutus'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
    
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white"></div>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/course' 
      element = {authUser ? <Courses/> : <Navigate to = "/signup" />}
      />
      <Route path='/contact' element ={<Contactus/>}/>
      <Route path='/aboutus' element ={<Aboutus/>}/>
      <Route path = "/signup" element ={<Signup />}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App
