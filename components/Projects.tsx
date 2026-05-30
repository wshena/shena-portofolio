import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/consts";

const Projects = ({ className }: { className: string }) => {
  return (
    <section className={className}>
      <h1 className="text-center uppercase font-bold mb-10 pb-2.5 text-3xl">
        Projects
      </h1>
      <div className="flex flex-col gap-12.5">
        {projects.map((item, idx) => {
          return (
            <div
              className="flex flex-col lg:flex-row gap-5 md:gap-12.5 items-center justify-between lg:gap-12.5"
              key={idx}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={600}
                loading="lazy"
                className={`${idx % 2 === 0 ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}
              />
              <div
                className={`flex flex-col gap-5 ${idx % 2 === 0 ? "order-1 lg:order-1" : "order-2 lg:order-2"}`}
              >
                <h1 className="text-2xl uppercase tracking-wider">
                  {item.title}
                </h1>
                <p className="text-[15px] text-gray-400 text-justify">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  target="blank"
                  className="text-[12px] border-b text-gray-400 hover:text-black"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
