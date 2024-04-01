import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  const original = [
    { logo: FaHtml5, level: "Intermediate", count: 80 },
    { logo: IoLogoCss3, level: "Intermediate", count: 70 },
    { logo: SiJavascript, level: "Intermediate", count: 65 },
    { logo: SiReact, level: "Intermediate", count: 70 },
    { logo: FaJava, level: "Intermediate", count: 80 },
    { logo: SiSpringboot, level: "Intermediate", count: 70 },
    { logo: SiTailwindcss, level: "Intermediate", count: 65 },
    { logo: FaGithubSquare, level: "Intermediate", count: 80 },
  ];

  return (
    <section id="skill" className="bg-gray-800 py-10 relative left-3">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600"> Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {original.map((val, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl group"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${val.count}%, #ddd ${val.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 rounded-full flex items-center justify-center bg-gray-900 group-hover:text-cyan-600">
                  <val.logo />
                </div>
              </div>

              <p className="text-xl mt-3">{val.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
