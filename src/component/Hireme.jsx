import React from "react";
import hireMe from "../assets/work.jpg";
export const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">Do You Have Any Work?'</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl  mx-auto min-h-[24rem] mt-24 gap-6 lg:flex-row flex flex-col-reverse  items-center">
        <div>
          <h2 className="text-2xl font-semibold">Do You Want Any Work From Me? </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">Experienced in developing Spring Boot applications for server-side logic and data access, coupled with React.js to craft interactive and responsive frontend experiences,Skilled in leveraging the power of Spring Boot and React.js to create modern, scalable, and feature-rich web applications</p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img src={hireMe} alt="" className="lg:h-[24rem] h-96 lg:absolute bottom-0 -right-3 object-cover"/>
      </div>
    </section>
  );
};
