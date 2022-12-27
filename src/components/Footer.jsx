import React from "react";
import logo from "../assets/logo-light.svg";
import GoButton from "../common/GoButton";
import { icons } from "../constants/data";

const Footer = () => {
  return (
    <footer className="bg-neutral-veryDarkBlue py-10">
      <section className="container flex flex-col-reverse justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <article className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <p className="mx-auto my-6 text-center text-neutral-white opacity-60 md:hidden">
            &copy;Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <div>
            <img src={logo} className="h-8" alt="" />
          </div>

          <ul className="flex mt-10 space-x-4">
            {icons.map((icon) => {
              return (
                <a href="" key={icon.id}>
                  <img
                    src={icon.icon}
                    alt="icon"
                    onMouseOver={(e) => (e.currentTarget.src = icon.hoverIcon)}
                    onMouseOut={(e) => (e.currentTarget.src = icon.icon)}
                    className="hover:animate-pulse hover:scale-[1.2] w-6"
                  />
                </a>
              );
            })}
          </ul>
        </article>

        <article className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Home
            </a>
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Pricing
            </a>
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Products
            </a>
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Careers
            </a>
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Community
            </a>
            <a
              href=""
              className="hover:text-primary-brightRed transition-all duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </article>

        <article className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="email"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <GoButton />
            </div>
          </form>
          <div>
            <p className="text-neutral-white opacity-60 invisible md:visible">
              &copy;Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
