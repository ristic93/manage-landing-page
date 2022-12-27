import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { avatars } from "../constants/data";
import useMedia from "../hooks/useMedia";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  
  const [items] = useState(avatars);
  const { isDesktop, isLoading } = useMedia(`(min-width: 1280px)`);

  useEffect(() => {
    setIndex(isDesktop ? { start: 0, end: 3 } : { start: 0, end: 1 });
  }, [isLoading, isDesktop]);

  const [index, setIndex] = useState(
    isDesktop ? { start: 0, end: 3 } : { start: 0, end: 1 }
  );

  const { start, end } = index;

  const onLeft = () => {
    const { start, end } = index;
    if (start > 0) {
      setIndex({ start: start - 1, end: end - 1 });
    } else {
      setIndex(
        isDesktop
          ? { start: items.length - 3, end: items.length }
          : { start: items.length - 1, end: items.length }
      );
    }
  };

  const onRight = () => {
    const { start, end } = index;

    if (end < items.length) {
      setIndex({ start: start + 1, end: end + 1 });
    } else {
      setIndex(isDesktop ? { start: 0, end: 3 } : { start: 0, end: 1 });
    }
  };

  return (
    <section className="flex flex-col items-center space-y-10">
      <h2 className="text-4xl text-center font-bold py-10 text-primary-darkBlue">
        What they've said
      </h2>
      <article className="container grid grid-cols-1 space-x-4 md:grid-cols-1 xl:grid-cols-3 mx-auto">
        {items.slice(start, end).map((item, idx) => {
          return (
            <div className="carousel-item py-6" key={item.id}>
              <div className="flex flex-col items-center text-center py-10 px-5 bg-neutral-lightGray relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-14 absolute -top-7 hover:scale-[1.3] transition-all duration-300 cursor-pointer"
                />
                <h3 className="font-bold py-2 text-primary-darkBlue">
                  {item.name}
                </h3>
                <p className="opacity-60">{item.title}</p>
              </div>
            </div>
          );
        })}
      </article>
      <div className="flex space-x-4">
        <button
          onClick={onLeft}
          className="text-primary-brightRed text-[1.2rem]"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={onRight}
          className="text-primary-brightRed text-[1.2rem]"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
      <Button />
    </section>
  );
};

export default Testimonials;
