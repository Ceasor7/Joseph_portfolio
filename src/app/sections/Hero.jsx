'use client'
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

const Hero = () => {
    const [text1, count1] = useTypewriter({
        words:["Welcome to my World | Joseph's portfolio"],
        loop:true,
        delaySpeed: 2000,
       
    })

    const [text, count] = useTypewriter({
        words:["Hi, The Name's Joseph","Web Developer | Software Developer","<ArtEnthusiast/>"],
        loop:true,
        delaySpeed: 2000,
       
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
    <Image src="/DSC1.JPG" className="relative rounded-md mx-auto object-cover" width={120} height={120} alt="Joseph kimani" />
    <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">Software Engineer | Web Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semi px-10">
            <span>{text}</span>
            <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5">
            <Link href="#about">
                <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
                <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
                <button className="heroButton">Skills</button>
            </Link>
            <Link href="projects">
                <button className="heroButton">Projects</button>
            </Link>

        </div>
    </div>


</div>
  )
}

export default Hero