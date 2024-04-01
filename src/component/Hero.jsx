import React from "react";
import dp from "../assets/dp1.jpg";
export const Hero = () => {

  const socialMedia = [{logo:'logo-instagram', url:"https://www.instagram.com/nidhi_thelabailu"},{logo:'logo-facebook', url:"https://www.facebook.com/share/uzuBfaJs1eC3oLcY/?mibextid=qi2Omg"},{logo:'logo-linkedin', url:"https://www.linkedin.com/in/nidhi-thelabailu-2bbb5b1a3/"}];
  return (
    <section id="home" className="min-h-screen mt-12 flex py-10 md:flex-row flex-col">
      <div className="flex-1 flex items-center justify-center h-full">
        <img className="md:w-96 h-full object-cover rounded-xl " src={dp} alt="" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-5xl md:text-6xl text-cyan-600">
              Hello!
              <br />
            </span>
            My Name Is <span>Nidhi T S</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-none leading-5 mt-4 font-bold text-gray-600">Junior Web Developer</h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="flex items-center md:justify-start justify-center mt-8 text-3xl gap-5">
            {socialMedia?.map((icons) => (
              <div className="text-gray-600 hover:text-white cursor-pointer" key={icons}>
                <a target="/new" href={icons.url}><ion-icon name={icons.logo}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
