import React from "react";
import SubButton from "../common/SubButton";

const Subscribe = () => {
  return (
    <section className="simplify bg-primary-brightRed mt-20">
      <div className="container mx-auto flex flex-col items-center space-y-10 md:space-y-0 md:flex-row justify-between py-20">
        <h2 className="text-3xl font-bold text-neutral-white text-center md:text-left">Simplify how your team <br /> works today.</h2>
        <SubButton />
      </div>
    </section>
  );
};

export default Subscribe;
