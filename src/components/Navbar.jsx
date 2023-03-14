import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
export default function Navbar(props) {
 

  return (
    <div>
        <nav className={`flex justify-around py-3 bg-${props.mode}`}>
            <span className={`text-2xl  text-${props.mode}`}>{props.title}</span>
            <ul className={`flex  justify-around text-${props.mode==='purple-600'?'white':'black'}`}>
           <Link to="/"><li className={`mx-3 cursor-pointer hover:text-gray-300`}>Home</li></Link>     
           <Link to="./about"><li  className='mx-3 cursor-pointer hover:text-gray-300'>About us</li></Link>     
           <Link to=""> <li className='mx-3 cursor-pointer hover:text-gray-300'>Contact</li></Link>    
            </ul>
            <button onClick={props.toggle} className='border-2 text-sm  border-purple-100 rounded-lg  px-3' >{props.btnName}</button>
        </nav>


    </div>
  )
}
