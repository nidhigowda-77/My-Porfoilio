import React, { useEffect, useState } from "react";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open ,setOpen] =useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILL", link: "#skill" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={` fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            N<span className="text-cyan-600">ID</span>HI T S
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } md:block hidden text-gray-900 px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((name, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={name?.link}>{name?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={()=>setOpen(!open)} className={`md:hidden z-[999] text-3xl  m-5 ${open ?"text-gray-900":"text-gray-100"}`}>
          
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={`${open ? "right-0 ":"right-[-100%]"} duration-300 md:hidden text-gray-900 absolute w-2/3  h-screen px-7 py-2 font-medium bg-white top-0`} >
          <ul className="flex flex-col justify-center py-2 h-full gap-10 text-lg">
            {menuLinks.map((menu,i)=>(
              <li onClick={()=>setOpen(false)} key={i} className="px-67 text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
