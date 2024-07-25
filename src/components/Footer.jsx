import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=' bg-[#2c3e50] p-4 '>
        <div className='max-w-5xl mx-auto flex flex-col space-y-20 md:space-y-0 md:flex-row text-white items-center justify-between py-12'>

          <div className=' space-y-4'>
            <h2 className=' uppercase text-3xl font-bold'>Location</h2>
            <p className='text-center '>2215 John Daniel Drive <br/>Clark, MO 65243   </p>
          </div>
          <div className=' space-y-4'>
            <h2 className=' uppercase text-3xl font-bold'>Around the web</h2>
            <div className=' flex items-center justify-between'>
              <div className=' border-2 border-white rounded-full w-fit p-3 hover:bg-white hover:text-black duration-300 cursor-pointer '>
                <a href="#" className='  '>
                    <FaFacebookF/>
              </a>
              </div>
              <div className=' border-2 border-white rounded-full w-fit p-3 hover:bg-white hover:text-black duration-300 cursor-pointer '>
                <a href="#" className='  '>
                    <FaLinkedin/>
              </a>
              </div>
              <div className=' border-2 border-white rounded-full w-fit p-3 hover:bg-white hover:text-black duration-300 cursor-pointer '>
                <a href="#" className='  '>
                    <FaTwitter/>
              </a>
              </div>
              <div className=' border-2 border-white rounded-full w-fit p-3 hover:bg-white hover:text-black duration-300 cursor-pointer '>
                <a href="#" className='  '>
                    <FaYoutube/>
              </a>
              </div>
              
            </div>
          </div>
          <div className=' space-y-4'>
            <h2 className=' uppercase text-3xl font-bold'>About freelancer</h2>
            <p className='text-center '>Freelance is a free to use, MIT licensed<br/> Bootstrap theme created by Hamza Nouh  </p>
          </div>

        </div>
      
    </div>
  )
}
