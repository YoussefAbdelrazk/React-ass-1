import React from 'react'
import { ImPlus } from "react-icons/im";
export default function Card({img}) {

    
      
  return (
    <div className=' relative  w-full cursor-pointer ' >
      <img className=' rounded-md' src={img} alt="" />
      <div className='  absolute inset-0 opacity-0 hover:opacity-70 bg-[#1abc9c] duration-500 '>
        <div className=' flex items-center justify-center h-full  '>
          <ImPlus className='text-white font-bold text-6xl z-20' />
        </div>
        
      </div>
  
      
    </div>
  )
}
