import React from "react";

const NavButton = () => {
  return (
    <div>
      <button className="hidden md:flex bg-primary-brightRed py-3 px-6 rounded-[30px] text-neutral-white drop-shadow-xl hover:opacity-80 hover:scale-[1.2] transition-all duration-300 animate-bounce">
        Get Started
      </button>
    </div>
  );
};

export default NavButton;
