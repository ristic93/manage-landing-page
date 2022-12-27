import React from "react";
import Button from "../common/Button";
import bg from "../assets/illustration-intro.svg"

const Header = () => {
  return (
    <header className="flex flex-col-reverse md:flex-row items-center container mx-auto md:py-20 md:space-x-20">
      <article className="basis-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl text-center md:text-left font-[700] text-primary-darkBlue">Bright everyone <br /> together to build <br /> better products.</h1>
        <p className="opacity-60 py-10 md:max-w-sm text-center md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button />
      </article>
      <article className="basis-1/2">
        <img src={bg} alt="" />
      </article>
    </header>
  );
};

export default Header;
