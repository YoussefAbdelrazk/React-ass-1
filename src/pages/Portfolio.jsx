import React,{useState} from "react";
import { FaStar } from "react-icons/fa";
import Card from "../components/Card";

import img1 from '../assets/cabin.4417330275f78faa31c3.png'
import img2 from '../assets/cake.6554473016d32b343f02.png'
import img3 from '../assets/circus.494a4a914b5471b41f3e.png'
import img4 from '../assets/safe.01792c0bdc342bf4bf9c.png'
import img5 from '../assets/submarine.48c9704ca7f8ce901038.png'

export default function Portfolio() {
  const[show,setShow]=useState(true)
  return (
    <section id="Portfolio" className="my-24 max-w-6xl mx-auto px-6">
    
      <h1  className="text-center text-6xl font-bold text-[#2c3e50] ">
        Portfolio
      </h1>
      <div className="inline-flex  items-center justify-center w-full ">
        <hr className="w-64 h-1 my-8 bg-[#2c3e50] border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 text-3xl text-[#2c3e50] left-1/2 ">
          <FaStar />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        <Card img={img1}/>
        <Card img={img2}/>
        <Card img={img3}/>
        <Card img={img4}/>
        <Card img={img5}/>
        <Card img={img2}/>
      </div>
    </section>
  );
}
