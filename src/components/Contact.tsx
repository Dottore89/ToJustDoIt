// 7

import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { toast } from "react-hot-toast";



export default function Contact() {
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSending(true)

        //Simulación de envío
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSending(false)
        toast.success("🎉 Thank you! Your message was sent.")
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
                className="text-[#ede7d9] flex flex-col items-center gap-4 bg-[#d5a021] w-6/9 mx-auto py-8 rounded-lg xl:max-w-2xl"
            >
                <label className="font-bold lg:text-xl">Name</label>
                <input 
                    required 
                    className="border-2 rounded-lg border-red-700 placeholder-[#ede7d9] pl-2 shadow-xl" 
                    placeholder="🖐🏻 Your Name"
                />
                <label className="font-bold lg:text-xl">Email</label>
                <input 
                    required 
                    className="border-2 rounded-lg border-red-700 placeholder-[#ede7d9] pl-2 shadow-xl" 
                    placeholder="✉️ Your Email"
                />
                <label className="font-bold lg:text-xl">Message</label>
                <input 
                    className="border-2 rounded-lg border-red-700 placeholder-[#ede7d9] pl-2 shadow-xl lg:mb-8" 
                    placeholder="✍🏻 Message (optional)"
                />
                <button
                    className="border-2 bg-gradient-to-r from-[#d5a021] to-red-700 text-white font-semibold py-2 px-8 text-2xl rounded-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-1 cursor-pointer"
                >
                    {isSending ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                    "Send"
                    )}
                </button>
            </form>

            <div className="flex justify-center gap-12 my-8 lg:my-16">
                <FaInstagram  className="h-12 w-12 fill-pink-600 cursor-pointer lg:h-16 lg:w-16"/>
                <CiYoutube  className="h-12 w-12 fill-red-600 cursor-pointer lg:h-16 lg:w-16"/>
                <CiTwitter  className="h-12 w-12 fill-blue-500 cursor-pointer lg:h-16 lg:w-16"/>
            </div>
        </>
        
    )
}