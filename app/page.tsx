import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Projects className="container xl:px-[70px] my-[80px]"/>
    </>
  );
}
