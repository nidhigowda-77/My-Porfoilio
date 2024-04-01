import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import webScrapper from "../assets/webScrapper.png";
import todo from "../assets/todo.jpg";
import dp1 from "../assets/dp1.jpg";
import weatherApp from "../assets/weather.jpg";
const Project = () => {
  const projects = [
    {
      img: weatherApp,
      name: "weather-app",
      gitHubLink: "https://github.com/nidhigowda-77/Weather-App.git",
      liveLink: "https://nidhi-weather-app.vercel.app/",
    },
    {
      img: todo,
      name: "todo-app",
      gitHubLink: "https://github.com/nidhigowda-77/Todo-App.git",
      liveLink: "https://todo-app-nidhigowda-77s-projects.vercel.app/",
    },
    {
      img: webScrapper,
      name: "webScrap-app",
      gitHubLink:
        "https://github.com/nidhigowda-77/AdaptNxt-Product-Details.git",
    },
  ];

  return (
    <section id="projects">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My Work</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((value, index) => (
              <SwiperSlide id={index}>
                <div className="h-fit w-full p-4 bg-slate-700  rounded-xl ">
                  <img
                    src={value.img}
                    alt=""
                    className="rounded-lg h-[10rem]"
                  />
                  <h3 className="text-xl my-4">{value.name}</h3>
                  <div className="flex gap-3 ">
                    <a
                      target="/blank"
                      href={value.gitHubLink}
                      className="text-cyan-600 bg-gray-800 py-1 px-2 inline-block"
                    >
                      GitHub
                    </a>
                    <a
                      target="/blank"
                      href={value.liveLink}
                      className="text-cyan-600 bg-gray-800 py-1 px-2 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img className="w-[18rem] ml-4 rounded-lg" src={dp1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
