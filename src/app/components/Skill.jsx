import { motion } from "framer-motion"
const Skill = ({directionLeft}) => {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src="/html.svg"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 sm:h-20 sm:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
         />
         <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 sm:h-20 sm:w-20 rounded-full z-0 ">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">80%</p>
            </div>
         </div>
    </div>
  )
}

export default Skill