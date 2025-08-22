import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CustomCursor from "./UI/CustomCursor"

const App = () =>  {
  return (
    <>
    <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

// ❌ Wrong: export default App();
// ✅ Correct:
export default App;