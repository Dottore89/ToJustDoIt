// 1
import { useState, useEffect } from "react"

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')

    const handleResize = () => setIsSmall(mediaQuery.matches)

    // Escucha cambios
    mediaQuery.addEventListener('change', handleResize)
    // Inicializa estado
    handleResize()

    // Limpia el listener
    return () => mediaQuery.removeEventListener('change', handleResize)

  }, [])

  return isSmall
}

export default function Header() {
  const [openHamburger, setOpenHamburger] = useState(false)
  const isSmall = useIsSmallScreen()

  function toggleHamburger() {
    setOpenHamburger(prevOpenState => !prevOpenState)
  }

  return (
    <>
      {isSmall ? (
        <div className="bg-[#d5a021] text-center">
          <h1 className="text-white py-4 text-2xl font-[Playwrite-DK-Loopet] italic font-bold">Teacher Anastasia</h1>
          <div onClick={toggleHamburger} className="transition-all duration-300 bg-gradient-to-r from-[#d5a021] to-red-700 fixed bottom-26 right-6 z-50 border-2 rounded-4xl bg-[#d5a021] w-20 h-20 p-6 cursor-pointer text-2xl">☰</div>
        </div>
      ) : (
        <div className='bg-[#d5a021] whitespace-nowrap justify-between flex gap-4 px-4 sm:gap-0'>
          <h1 className="text-white py-4 text-lg lg:text-3xl font-[Playwrite-DK-Loopet] italic font-bold sm:text-xl">Teacher Anastasia</h1>
          <nav className="flex gap-3 lg:gap-12 text-white items-center">
            <a className="cursor-pointer rounded-md py-1 hover:bg-amber-800 text-sm sm:text-md lg:text-lg">About me</a>
            <a className="cursor-pointer rounded-md py-1 hover:bg-amber-800 text-sm sm:text-md lg:text-lg">Classes</a>
            <a className="cursor-pointer rounded-md py-1 hover:bg-amber-800 text-sm sm:text-md lg:text-lg">Testimonials</a>
            <a className="cursor-pointer rounded-md py-1 hover:bg-amber-800 text-sm sm:text-md lg:text-lg">Contact</a>
            <a className="transition-all duration-300 px-1 py-2 hover:brightness-110 hover:-translate-y-1 cursor-pointer rounded-md bg-gradient-to-r from-[#d5a021] to-red-700 font-semibold border-2 text-center text-sm lg:text-lg">Book a class</a>
          </nav>
        </div>
      )}

      {openHamburger && (
        <div className="bg-white flex flex-col max-w-3/12 fixed bottom-48 right-2 p-2 gap-4 border-2 items-center font-semibold">
          <a className="cursor-pointer rounded-md py-1 text-sm sm:text-md lg:text-lg">About me</a>
          <a className="cursor-pointer rounded-md py-1 text-sm sm:text-md lg:text-lg">Classes</a>
          <a className="cursor-pointer rounded-md py-1 text-sm sm:text-md lg:text-lg">Testimonials</a>
          <a className="cursor-pointer rounded-md py-1 text-sm sm:text-md lg:text-lg">Contact</a>
          <a className="px-1 py-2 cursor-pointer rounded-md bg-gradient-to-r from-[#d5a021] to-red-700 font-semibold border-2 text-center text-sm lg:text-lg">Book a class</a>
        </div>
      )}
    </>
  )
}