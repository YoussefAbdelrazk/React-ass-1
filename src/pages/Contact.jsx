import React from "react";
import { FaStar } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="Contact" className="my-24 max-w-6xl mx-auto px-6">
      <h1 className="text-center text-6xl font-bold text-[#2c3e50] ">
        CONTACT ME
      </h1>
      <div className="inline-flex  items-center justify-center w-full ">
        <hr className="w-64 h-1 my-8 bg-[#2c3e50] border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 text-3xl text-[#2c3e50] left-1/2 ">
          <FaStar />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start justify-center space-y-10 px-8 py-4">
        <input
          type="text"
          placeholder="Name"
          className=" bg-[#1abc9c] placeholder:text-white placeholder:text-3xl px-8 py-4 w-[80%] focus:outline-none rounded-md font-bold text-2xl text-white hover:bg-green-800 duration-300"
        />
        <input
          type="text"
          placeholder="Email"
          className=" bg-[#1abc9c] placeholder:text-white placeholder:text-3xl px-8 py-4 w-[80%] focus:outline-none rounded-md font-bold text-2xl text-white hover:bg-green-800 duration-300"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className=" bg-[#1abc9c] placeholder:text-white placeholder:text-3xl px-8 py-4 w-[80%] focus:outline-none rounded-md font-bold text-2xl text-white hover:bg-green-800 duration-300"
        />

        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-[80%] text-white text-sm placeholder:text-white bg-[#1abc9c] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder:text-xl  dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-green-800 duration-300"
          placeholder="Write your comment here..."
        ></textarea>
        <button className='bg-[#1abc9c] px-8 py-2 rounded font-semibold text-white text-2xl hover:bg-green-800 duration-300  '>Send</button>
      </div>
    </section>
  );
}
