'use client'
import { motion } from "framer-motion"

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden" >
        <motion.img 
        initial={{
            y: -100,
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
        className="w-10 h-10 rounded-full xl:w-[60px] xl:h-[60px] object-cover object-center"
        src="/DSC1.JPG"
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO KIM's Solutions</h4>
            <p className="font-bold text-2xl mt-1">Kim's solution</p>
            <div className="flex space-x-2 my-2">
            <img
            className="h-10 w-10 rounded-lg"
            src="/angularjs.svg"
            alt="angularjs"
            />
             <img
            className="h-10 w-10 rounded-lg"
            src="/html.svg"
            alt="html"
            />
             <img
            className="h-10 w-10 rounded-lg"
            src="/javascript.svg"
            alt="javascript"
            />
             <img
            className="h-10 w-10 rounded-lg"
            src="/json.png"
            alt="json"
            />
             <img
            className="h-10 w-10 rounded-lg"
            src="/nodejs.svg"
            alt="nodejs"
            />
             <img
            className="h-10 w-10 rounded-lg"
            src="/vuejs.svg"
            alt="vuejs"
            />

            </div>
            <p className="uppercase py-5 text-gray-300">Started work ....... - Ended ......</p>
            <ul className="list-disc space-y-1 ml-5 text-lg">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard