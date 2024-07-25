import React from "react";
import { FaStar } from "react-icons/fa";
export default function About() {
  return (
    <section id="About" className="bg-[#1abc9c] h-screen flex items-center justify-center   ">
      <div className="max-w-6xl mx-auto ">
      <h1 className="text-center text-6xl font-bold text-white">ABOUT</h1>
      <div className="inline-flex  items-center justify-center w-full ">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 text-3xl text-white left-1/2 ">
          <FaStar />
        </div>
      </div>
      <div className="flex flex-col md:space-y-0 space-y-12 md:flex-row md:space-x-6 text-white my-12 items-center justify-between px-10">
        <p className="max-w-md mx-auto ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corrupti quae consequatur. Modi alias saepe molestias sed a distinctio debitis, esse accusamus vero omnis veniam ea nobis perferendis aspernatur cum est, enim accusantium ut expedita fugit. Delectus nulla non sequi?
        </p>
        <p className="max-w-md mx-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. In id dicta deleniti eaque itaque iure, facilis ad ullam unde nemo ipsa dolorum accusantium, autem odit. Est dolores aliquam atque! Reiciendis blanditiis ipsa expedita deleniti accusamus et facere nobis maxime quae?</p>
      </div>
      </div>
    </section>
  );
}
