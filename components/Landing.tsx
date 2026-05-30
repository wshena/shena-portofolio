"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Landing = () => {
  const scrollDown = () => {
    const nextSection = document.querySelector("#aboutMe");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 xl:px-17.5">
      <div className="lg:w-[40vw]">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-widest">
          Hello, My name is <span className="uppercase">Shena</span>
        </h1>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-widest">
          Pleased to meet you
        </h1>
        <p className="text-md lg:text-lg text-gray-400 mt-5">
          Currently looking for work in the field of frontend developer. Have
          interest and passion in studying current technology related to web
          development.
        </p>
      </div>

      <div className="">
        <Image
          src="/Wisnu.jpg"
          alt="photo-profile"
          height={450}
          width={450}
          loading="lazy"
          className="w-112.5 h-75 md:h-112.5"
        />
      </div>

      <div className="hidden absolute left-0 bottom-0 z-20 w-full lg:flex items-center justify-center">
        <button
          onClick={scrollDown}
          className="transition-transform duration-500 hover:translate-y-2"
        >
          {" "}
          <IoIosArrowDown size={30} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Landing;
