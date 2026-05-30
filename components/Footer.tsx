"use client";
import React from "react";
import { sideNavLinks } from "@/utils/consts";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContentContainer from "./containers/ContentContainer";

const sendEmail = (emailAddress: string) => {
  window.location.href = `mailto:${emailAddress}`;
};

const EmailLink = ({ emailAddress }: { emailAddress: string }) => (
  <p
    onClick={() => sendEmail(emailAddress)}
    className="text-[12px] hover:cursor-pointer"
  >
    {emailAddress}
  </p>
);

const Footer = () => {
  return (
    <section className="bg-white text-black w-full px-5 py-5 md:px-6 lg:px-7 xl:px-15">
      <ContentContainer>
        <div className="flex flex-col lg:flex lg:flex-row justify-between gap-7.5 lg::gap-0 md:grid md:grid-cols-2 border-b border-gray-500 pb-7.5">
          <div className="flex flex-col gap-5 lg:w-[60%] lg:pr-12.5 w-full">
            <h1 className="uppercase font-bold text-sm">about me</h1>
            <p className="text-[15px] text-gray-700">
              Currently looking for employment in web development especialy in
              frontend side. Hardworking and unyielding student. Like in the
              feld of technology and pursue the feld. Have more than 2 year
              experience in web programming and front end developer Currently
              learning Fullstack Development on website, and want to learn more
              about programming
            </p>
          </div>

          <div className="lg:w-[30%] w-full">
            <h1 className="uppercase font-bold text-sm mb-5">navigation</h1>
            <div className="flex flex-col gap-5">
              {sideNavLinks.map((item, idx) => {
                return (
                  <Link
                    href={item.to}
                    className="text-[13px] text-gray-700 hover:text-white capitalize"
                    key={idx}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:w-[40%] w-full">
            <h1 className="uppercase font-bold text-sm mb-5">contacts</h1>
            <div className="flex flex-col gap-2.5 mb-5">
              <div className="flex items-center gap-2.5">
                <FaLocationDot />
                <p className="text-[12px]">Purbalingga, Indonesia</p>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdMail />
                <EmailLink emailAddress="wshenaarrafi@gmail.com" />
              </div>
            </div>
            <Link
              href={"https://www.linkedin.com/in/wisnu-shena-arrafi-866226251"}
              target="blank"
              className="text-[12px] pb-1.25 border-b border-b-gray-300 hover:border-b-white"
            >
              Connect on LinkedIn
            </Link>
          </div>

          <div className="lg:w-[40%] w-full">
            <h1 className="uppercase font-bold text-sm mb-5">follow me</h1>
            <div className="flex items-center gap-3.75">
              <Link
                href={"https://web.facebook.com/wshena/"}
                target="blank"
                className="p-2.5 border border-white hover:bg-orange-500 transition-colors duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"https://www.instagram.com/poppywydy/"}
                target="blank"
                className="p-2.5 border border-white hover:bg-orange-500 transition-colors duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://github.com/wshena"}
                target="blank"
                className="p-2.5 border border-white hover:bg-orange-500 transition-colors duration-500"
              >
                <FaGithub />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/wisnu-shena-arrafi-866226251"
                }
                target="blank"
                className="p-2.5 border border-white hover:bg-orange-500 transition-colors duration-500"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-5 text-[12px] text-gray-700">
          Made with love by{" "}
          <span className="text-black uppercase tracking-wide">
            Wisnu Shena Arrafi
          </span>{" "}
          | Copyright 2024
        </p>
      </ContentContainer>
    </section>
  );
};

export default Footer;
