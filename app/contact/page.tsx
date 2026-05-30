import React from "react";
import { IoMdSend } from "react-icons/io";

const page = () => {
  return (
    <section className="py-40 lg:mb-5 px-5 md:px-6 lg:px-7 xl:px-15 flex items-center lg:items-start lg:justify-between lg:gap-5 xl:gap-0 text-black">
      <div className="h-screen w-screen lg:w-[50%] lg:flex items-center lg:justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl lg:text-4xl uppercase font-bold tracking-widest text-black">
            Contact Me
          </h1>
          <form action="" className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="NAME"
                autoComplete="off"
                className="text-black focus:outline-none pb-2.5 border-b w-full"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="YOUR EMAIL"
                autoComplete="off"
                className="text-black focus:outline-none pb-2.5 border-b w-full"
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="SUBJECT"
              autoComplete="off"
              className="focus:outline-none pb-2.5 border-b"
            />
            <input
              type="text"
              name="project"
              id="project"
              placeholder="PROJECT"
              autoComplete="off"
              className="focus:outline-none pb-2.5 border-b"
            />

            <button className="py-2.5 px-5 gap-3.75 inline-flex w-fit items-center text-white bg-orange-500 hover:scale-[.9] transition-transform duration-300">
              <IoMdSend />
              <span className="uppercase tracking-widest">SEND EMAIL</span>
            </button>
          </form>
        </div>
      </div>

      <div
        className="hidden lg:block h-screen w-[50%] bg-cover bg-center"
        style={{
          backgroundImage: `url('/wave.jpg')`,
        }}
      ></div>
    </section>
  );
};

export default page;
