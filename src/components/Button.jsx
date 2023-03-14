import React from 'react'

export default function button(props) {
  return (
    <div>
          <button className='border-2 flex  hover:bg-purple-100  hover:text-purple-600 transition-colors border-purple-600 justify-center mx-auto mt-5 bg-purple-600 rounded-xl shadow-lg text-white py-2 px-4 '>{props.name}</button>
     
    </div>
  )
}
