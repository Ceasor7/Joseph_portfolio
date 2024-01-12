'use client'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1, x: 0
        }}
        viewport={{
          once: true
        }}
            src="/DSC1.JPG"
            className="mb-20 md:mb-0 flex-shrink-0 rounded-md object-cover md:rounded-lg md:w-[150px] md:h-[150px] xl:w-[250px] xl:h-[250px]"
            height={100}
            width={100}
            alt="Joseph Kimani"
        />
         <motion.div
          initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1, x: 0
        }}
        viewport={{
          once: true
        }}
          className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a {" "}
                    <span className="underline decoration-[#0c5d28]/50">Little</span>{" "}
                    background
                </h4>
                <p className="text-base">
                    As a FullStack Junior Web Developer, I specialize in programming and
                    design content creation using the latest web technologies. I am
                    continually excited to utilize new technologies in order to solve
                    problems in the design, development, and deployment phases of web
                    applications. I am skilled in using JavaScript frameworks and
                    libraries like ReactJs and NextJs to create visually appealing user
                    interfaces that are easy for users to navigate. On the backend of web
                    applications, I prefer using NodeJS and ExpressJs to facilitate
                    communication between frontend components and the database.
                </p>
            </motion.div>
    </motion.div>
  )
}

export default About