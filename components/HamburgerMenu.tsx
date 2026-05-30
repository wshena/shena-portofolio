"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sideNavLinks } from "@/utils/consts";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface Props {
  label: string;
  link: string;
  click: () => void;
}

const SideNavLink = ({ click, label, link }: Props) => {
  return (
    <>
      {label === "Resume" ? (
        <Link
          target="blank"
          onClick={click}
          href={link}
          className="text-lg pb-3 lg:pb-0 md:text-3xl font-bold text-gray-400 hover:text-black transition-all translate-x-0 hover:translate-x-3 duration-300 border-b lg:border-b-0"
        >
          {label}
        </Link>
      ) : (
        <Link
          onClick={click}
          href={link}
          className="text-lg pb-3 lg:pb-0 md:text-3xl font-bold text-gray-400 hover:text-black transition-all translate-x-0 hover:translate-x-3 duration-300 border-b lg:border-b-0"
        >
          {label}
        </Link>
      )}
    </>
  );
};

const HamburgerMenu = () => {
  const [isClick, setIsClick] = useState(false);

  const handleOnClick = () => setIsClick(true);
  const handleOffClick = () => setIsClick(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <button onClick={handleOnClick} className="relative cursor-pointer">
        <IoMenu size={30} color="black" />
      </button>

      {/* Desktop */}
      <div
        className={`hidden lg:block fixed top-0 h-screen bg-white z-50 border w-[30%] p-10 transition-all duration-700 ${isClick ? "right-0" : "-right-250"}`}
      >
        <button onClick={handleOffClick} className="cursor-pointer">
          <RxCross2 size={30} color="black" />
        </button>
        <div className="flex flex-col gap-7.5 mt-7.5">
          {sideNavLinks.map((item, idx) => {
            return (
              <SideNavLink
                click={handleClick}
                label={item.label}
                link={item.to}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      {/* Desktop */}

      {/* Mobile */}
      <div
        className={`fixed block lg:hidden left-0 w-screen h-screen bg-white z-10 p-5 transition-all duration-700 ${isClick ? "top-0" : "-top-250"}`}
      >
        <div className="space-y-10">
          <button className="flex w-full justify-end" onClick={handleOffClick}>
            {" "}
            <RxCross2 size={30} />{" "}
          </button>
          <div className="flex flex-col gap-5">
            {sideNavLinks.map((item, idx) => {
              return (
                <SideNavLink
                  click={handleOffClick}
                  label={item.label}
                  link={item.to}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile */}
    </>
  );
};

export default HamburgerMenu;
