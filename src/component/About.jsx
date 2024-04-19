import React from "react";
import dp6 from "../assets/dp4.jpg"
export const About = () => {
  return (
    <section id="about" className="py-10  text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className=" flex md:flex-row items-center flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-400 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I'm an enthusiastic <span className="text-cyan-400 text-lg">Java Developer </span> with 8 months of experience and Fast-learning <span className="text-cyan-400 text-lg">React Developer </span> . I'm passionate about building user-friendly and responsive web applications with React.js
              </p>
              <div>
                <div className="flex mt-10 items-center gap-7">
                  <div>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      01
                    </h3>
                    <span className="text-cyan-600 md:text-base text-sm">Years Experience</span>
                  </div>
                  <div>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      01
                    </h3>

                    <span className="text-cyan-600 md:text-base text-sm">Companies Worked</span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1zLYx5aBjw_XhYsewDGux7Db9Y6YoldPJ/view?usp=drive_link" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center md:mt-0 mt-6">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img className="bg-cyan-600 rounded-2xl w-full object-cover" src={dp6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
