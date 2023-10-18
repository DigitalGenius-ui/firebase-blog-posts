import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);
  return (
    <header
      className={`border-b border-black sticky top-0 z-50 
    ${isActive ? "bg-white" : "bg-banner"}
    transition-all duration-500`}>
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="h-[2.5rem]"
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <button className="hidden text-sm sm:flex items-center gap-5">
              Sign In
            </button>
          </div>
          <button className="bg-black text-white rounded-full px-3 p-2 text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
