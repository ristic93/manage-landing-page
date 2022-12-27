import React, { useState } from "react";
import logo from "../assets/logo.svg";
import NavButton from "../common/NavButton";
import menu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-start py-10 container mx-auto">
      <div>
        <img src={logo} alt="" className="cursor-pointer animate-pulse" />
      </div>
      <ul className="hidden md:flex space-x-10 text-primary-darkBlue">
        <li>
          <a
            href="#"
            className="font-[500] hover:opacity-70 transition-all duration-300"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-[500] hover:opacity-70 transition-all duration-300"
          >
            Product
          </a>
        </li>
        <li>
          <a href="#" className="font-[500] hover:opacity-70">
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-[500] hover:opacity-70 transition-all duration-300"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-[500] hover:opacity-70 transition-all duration-300"
          >
            Community
          </a>
        </li>
      </ul>
      <NavButton />

      <img
        src={`${toggle ? close : menu}`}
        alt="hamburger"
        onClick={() => setToggle((prev) => !prev)}
        className="md:hidden w-[25px]"
      />

      <ul
        className={`${
          toggle ? "flex flex-col" : "hidden"
        } text-center absolute bg-neutral-white top-[80px] left-5 right-5 py-10 space-y-6 rounded-md shadow-lg md:hidden`}
      >
        <li>
          <a
            href="#"
            className="hover:text-primary-brightRed font-bold transition-all"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-primary-brightRed font-bold transition-all"
          >
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-primary-brightRed font-bold transition-all"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-primary-brightRed font-bold transition-all"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-primary-brightRed font-bold transition-all"
          >
            Community
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
