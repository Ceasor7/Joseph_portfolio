import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import ContactMe from "./sections/ContactMe";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0c5d28]/80">
    <Navbar />
    <section id="hero" className='snap-start'>
      <Hero />
    </section>
    <section id="about" className='snap-center'>
      <About />
    </section>
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>
    <section id="skills" className="snap-start">
      <Skills />
    </section>
    <section id="projects" className="snap-start">
      <Projects />
    </section>
    <section id="contact" className="snap-start">
      <ContactMe />
    </section>
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img src="DSC1.JPG"
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          alt="Joseph kimani"
          />
        </div>
      </footer>
    </Link>
  </div>
  )
}
