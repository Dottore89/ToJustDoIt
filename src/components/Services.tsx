// 4
export default function Services() {
    return (
        <div className="text-[#ede7d9] text-center flex flex-col gap-4 text-sm mt-12">
            <h1 className="text-4xl lg:text-5xl font-bold">Services</h1>
            <div className="flex flex-col items-center justify-center gap-4">
                <img className="w-35 lg:w-45" src="/Icono-1.webp"></img>
                <h1 className="font-bold lg:text-lg">Guided conversation</h1>
                <p>Conversation practice with specific topics and personalized support.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <img className="w-35 lg:w-45" src="/Icono-2.webp"></img>
                <h1 className="font-bold lg:text-lg">Grammar and writing</h1>
                <p>Study of grammatical rules and written composition in Russian.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <img className="w-35 lg:w-45" src="/Icono-3.webp"></img>
                <h1 className="font-bold lg:text-lg">Preparation for official exams</h1>
                <p>Training for standardized Russian proficiency tests.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <img className="w-35 lg:w-45" src="/Icono-4.webp"></img>
                <h1 className="font-bold lg:text-lg">Russian for business</h1>
                <p>Russian language and culture focused on the business and commercial context</p>
            </div>
        </div>
    )
}