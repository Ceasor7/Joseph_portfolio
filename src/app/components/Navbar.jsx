'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

const Navbar = () => {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
    <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 1
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center">
        <SocialIcon url="https://twitter.com/ceasor07" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://instagram.com/aj_kim_jnr" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://linkedIn/joseph kimani" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/ceasor07" fgColor="gray" bgColor="transparent" />
    </motion.div>
    
    <Link href="#contact">
    <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 1
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
    </motion.div>
    </Link>
    
</header>
  )
}

export default Navbar