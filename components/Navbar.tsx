import React from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ContentContainer from "./containers/ContentContainer";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <ContentContainer>
        <nav className="flex items-center justify-between px-5 py-5 md:px-6 lg:px-7 xl:px-15">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
          </Link>
          <div className="hidden md:flex flex-col items-center">
            <h1 className="font-bold text-xl text-black">Wisnu Shena Arrafi</h1>
            <h3 className="text-sm text-gray-400 uppercase tracking-[0.25em]">
              Junior Frontend Developer
            </h3>
          </div>
          <HamburgerMenu />
        </nav>
      </ContentContainer>
    </header>
  );
};

export default Navbar;
