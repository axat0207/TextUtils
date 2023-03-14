import React, {useState} from 'react'
import Button from './Button';


export default function Textbox(props) {
  const [text, settext] = useState("Enter Text here");
  // const []
  
 const handleOnChange =  (event)=>{
   settext(event.target.value)
 }
 const upper = ()=>{
   let newText = text.toUpperCase();
  settext(newText);
 }
 const lower = ()=>{
   
  let newText = text.toLowerCase();
  settext(newText);
 
 }
 const clear = ()=>{

  settext("");
 
 }

  return (
    <>
    
    <div>
      
        <h1 className=' mt-5 text-cyan-500 font-bold text-4xl'>Welcome to TextUtils</h1>
        <textarea id="txt" onChange={handleOnChange} className='pt-3 pl-5 border-2 h-[200px] rounded-xl shadow-lg  mt-5 mx-auto w-[70vw] border-blue-300' value={text} cols="30" rows="10"></textarea>
        <div className="flex justify-around w-[1000px] mx-auto ">
        <button onClick={upper} className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>
          UpperCase</button>
        <button onClick={lower} className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>
          LowerCase</button>
          <button onClick={clear} className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>
          Clear Text</button>
          <button onClick={clear} className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>
          Copy Text</button>
          <button onClick={clear} className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>
          Remove Extra space</button>
         
        
        </div> 
      
    </div>
  <h2 className='text-2xl text-cyan-600 mt-4 '> Your's Text summary</h2>
  <p className={`text-${props.mode==='purple-600'?'white':'black'}t-3xl t`} > Your text consists of {text.length} character and {text.split(" ").length} words and it will take {text.split(" ").length*0.008} minutes to read </p>
  </>
  )
}
