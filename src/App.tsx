import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* El resto de la app */}
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}