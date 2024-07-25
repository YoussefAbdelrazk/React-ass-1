import React from 'react'

import { FaStar } from "react-icons/fa";

import avatar from "../assets/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg";

export default function Home() {
  return (
    <section className="bg-[#1abc9c] py-24  ">
    <div className=" flex flex-col space-y-6 items-center justify-center pt-10">
      <img className=" size-96" src={avatar} alt="" />
      <h1 className="text-center text-6xl font-bold text-white">
        React Start
      </h1>
      <div className="inline-flex  items-center justify-center w-full ">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 text-3xl text-white left-1/2 ">
          <FaStar />
        </div>
      </div>
      <h3 className="text-white font-semibold">Graphic Artist - Web Designer - Illustrator</h3>
    </div>
  </section>
  )
}
