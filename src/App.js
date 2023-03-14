import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, {useState} from 'react'
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() { 
  const [mode, setmode] = useState("purple-600");
  const [btn, setbtn] = useState("Light Mode");
  const toggle = ()=>{
    if(mode === ('purple-600'))
    {
      setmode('purple-200');
      console.log("dark MODE ENbLEDD");
      document.body.style.backgroundColor ="white";
      setbtn("Dark mode");
      document.title = "TextUtils-LightMode";

    }else{
      setmode('purple-600');
      console.log("light MODE ENbLEDD");
      document.body.style.backgroundColor ="#09326a";
      setbtn("Light mode");
      document.title = "TextUtils-DarkMode";

    }
  }
  return (
    <>
    <Router>
    <div className="">
    <Navbar title= "Text Utils" btnName={btn} toggle={toggle} mode={mode}/>
    <div className=" w-[700px] ml-[16%]">
    
        

    <Routes>
      <Route path="/" element={ <Textbox mode={mode}/>}/>
      <Route path=":teamId" element={<About />} />  
    </Routes>
  
    </div>
     

        
    </div>
    </Router>
    </>
   
  );
}

export default App;
