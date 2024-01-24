import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Landingpage from './Components/Landingpage/Landingpage'
import Signup from './Components/Sigup/Signup'
import Readmore from './Components/Readmore/Readmore'
import Viewall from './Components/Viewall/Viewall'
import Home from './Components/Home/Home'
import VerifyEmail from './Components/VerifyEmail/VerifyEmail'
// import Splach from './Components/Splach/splach'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/verify",
    element: <VerifyEmail/>
  },
  {
    path: "/login",
    element: <Login/> 
  },
  
  {
    path: "/land",
    element: <Landingpage/>
  },
  {
    path: "/read",
    element: <Readmore/>
  },
  {
    path: "/view",
    element: <Viewall/>
  }
])
function App() {
 

  return (
    <RouterProvider router={router}/>
    
  
  )
}

export default App
