// 5
export default function Testimonials() {
    return (
        <div className="flex flex-col text-[#ede7d9] mt-12 gap-4 text-xs px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold my-10">Testimonials</h1>
            <div className="flex flex-col items-center text-center gap-4">
                <img className="rounded-full h-30 w-30 object-cover" src="/Testimonial-1.webp"></img>
                <h2 className="font-bold lg:text-base">"Thanks to your classes, I felt confident speaking Russian on my trip to Moscow."</h2>
                <p className="lg:text-base">Laura (Spain)</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
                <img className="rounded-full h-30 w-30 object-cover" src="/Testimonial-2.webp"></img>
                <h2 className="font-bold lg:text-base">"The grammar course helped me better understand Russian structures."</h2>
                <p className="lg:text-base">Mark (Germany)</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
                <img className="rounded-full h-30 w-30 object-cover" src="/Testimonial-3.webp"></img>
                <h2 className="font-bold lg:text-base">"Excellent teacher, her explanations are always clear and precise."</h2>
                <p className="lg:text-base">Anna (France)</p>
            </div>
        </div>
    )
}