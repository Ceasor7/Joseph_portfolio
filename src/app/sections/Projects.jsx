'use client'
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
     className="h-screen relative flex overflow-hidden flex-col text-left sm:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0c5d28]/80">
          {projects.map((project, i) => (
            <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 sm:p-44 h-screen">
              <motion.img
               initial={{
                  y: -200,
                  opacity: 0,            
                  }}
              transition={{
                  duration: 1.2
              }}
              whileInView={{
                  opacity: 1,
                  y: 0
              }}
                viewport={{
                    once: true
                }}
               src="/cali1.PNG" 
               alt="CALI" 
               className="w-[100px] h-[70px]" 
               />
              <div className="space-y-10 px-0 sm:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center"> 
                <span className="underline decoration-[#0c5d28]/50">Case Study {i + 1} of {projects.length}:</span>{" "}
                 UPA Clone
                 </h4>
                 <p className="text-lg text-center sm:text-left">
                 As a FullStack Junior Web Developer, I specialize in programming and design content creation using the latest web technologies. I am continually excited to utilize new technologies in order to solve problems in the design, development, and deployment phases of web applications. I am skilled in using JavaScript frameworks and libraries like ReactJs and NextJs to create visually appealing user interfaces that are easy for users to navigate. On the backend of web applications.
                 </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#0c5d28]/10 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}

export default Projects