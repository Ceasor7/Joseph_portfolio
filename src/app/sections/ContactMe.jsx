'use client'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const ContactMe = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
              <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">contact</h3>
              <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                  I have got just what you need.{" "}<span className="decoration-[#0c5d28]/50 underline">  Lets talk</span>{" "}
                </h4>
                <div className="space-y-10">
                  <div className="flex items-center space-x-5 justify-center">
                      <PhoneIcon className="text-[#0c5d28] h-7 w-7 animate-pulse" />
                      <p className="text-2xl">+254 708 234 571</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <EnvelopeIcon className="text-[#0c5d28] h-7 w-7 animate-pulse" />
                      <p className="text-2xl">Josephkgateru7@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <MapPinIcon className="text-[#0c5d28] h-7 w-7 animate-pulse" />
                      <p className="text-2xl">Nairobi, Kenya</p>
                  </div>
                </div>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                  <div className="flex space-x-2">
                    <input placeholder="Name" className="contactInput" type="text" /><input placeholder="Email" className="contactInput" type="email" />
                  </div>
                  <input placeholder="Subject" className="contactInput" type="text"/>

                  <textarea placeholder="Message" className="contactInput" />
                  <button type="submit" className="bg-[#0c5d28] py-5 px-10 rounded-md text-black font-bold">Submit</button>
                </form>
              </div>

    </div>
  )
}

export default ContactMe