
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
const links = [
  {id:1,title:'Portfolio',href:'#Portfolio'},
  {id:2,title:'About',href:'#About'},
  {id:3,title:'Contact',href:'#Contact'},
]
const Navbar = () => {
  const[nav,setNav]=useState(false)
  return (
    <div className=" bg-[#2c3e50] p-6    " >
      <div className="max-w-screen-lg mx-auto p-3 flex justify-between items-center">
        <h2 className=" uppercase text-3xl text-white font-bold">Start React</h2>
        <ul className=" hidden md:flex space-x-10">
          {links.map((link)=>{
            const {id,title,href}=link;
            return <li  className="text-2xl font-bold text-white hover:text-[#1abc9c] cursor-pointer duration-300" key={id}>
              <a href={href}>{title}</a>
            </li>
          })}
        </ul>
        <div className=" md:hidden z-50">
          {!nav ?<CiMenuFries onClick={ ()=>setNav(!nav) }  size={40} className="text-white font-bold  cursor-pointer"/>:<FaTimes  onClick={()=>setNav(!nav)} size={40} className="text-[#2c3e50] font-bold cursor-pointer " />}
        </div>

        <div className={nav? " absolute bg-white top-0 left-0 w-full h-[40%] ease-in-out duration-500" : " absolute top-0 left-[-100%] duration-300 ease-in-out"}>
        <ul className=" flex flex-col divide-y-2 p-10 space-y-8 ">
          {links.map((link)=>{
            const {id,title,href}=link;
            return <li className="text-2xl font-bold text-[#2c3e50] hover:text-[#1abc9c] cursor-pointer duration-300" key={id}>
              <a href={href}>{title}</a>
            </li>
          })}
        </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
