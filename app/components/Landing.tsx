'use client';
import React from 'react'
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Landing = () => {
  const scrollDown = () => {
    const nextSection = document.querySelector('#aboutMe');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-[20px] lg:gap-0 xl:px-[70px]">
      <div className="lg:w-[40vw]">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-[0.10em]">Hello, My name is <span className="uppercase">Shena</span></h1>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-[0.10em]">Pleased to meet you</h1>
        <p className="text-md lg:text-lg text-gray-400 mt-[20px]">Currently looking for work in the field of frontend developer. Have interest and passion in studying current technology related to web development.</p>
      </div>

      <div className="">
        <Image src='/Wisnu.jpg' alt="photo-profile" height={450} width={450} loading='lazy' className='w-[450px] h-[300px] md:h-[450px]' />
      </div>

      <div className="hidden absolute left-0 bottom-0 z-20 w-[100%] lg:flex items-center justify-center">
        <button onClick={scrollDown} className="transition-transform duration-500 hover:translate-y-2"> <IoIosArrowDown size={30}/> </button>
      </div>
    </div>
  )
}

export default Landing