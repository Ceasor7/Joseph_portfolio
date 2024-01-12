import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
  </div>
  )
}
