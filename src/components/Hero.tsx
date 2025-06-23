// 2
export default function Hero() {
    return (
        <div className="flex flex-col items-center text-center p-4 my-12">
            <div className="flex flex-col items-center gap-4">
                <img className="h-45 rounded-full" src="/Anastasia.webp"></img>
                <div>
                    <h1 className="text-[#ede7d9] text-2xl lg:text-3xl">Learn Russian with a native teacher</h1>
                    <h2 className="text-[#ede7d9] lg:text-lg">Personalized classes for all levels, wherever you are.</h2>
                </div>
            </div>
            <div className="flex flex-col gap-8 my-8">
                <button className="text-amber-800 text-xl lg:text-2xl font-bold hover:bg-white cursor-pointer border rounded p-2 bg-[#d5a021]">👉 Book your free class</button>
                <button className="text-amber-800 text-base lg:text-lg hover:bg-white bg-[#d5a021] cursor-pointer border rounded p-2">👁‍🗨 See how classes work</button>
            </div>
        </div>
    )
}