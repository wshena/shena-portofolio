import AboutMe from "@/components/AboutMe";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-start gap-20 pt-40">
      <Landing />
      <AboutMe />
      <Projects className="container xl:px-17.5 my-20" />
    </main>
  );
}
