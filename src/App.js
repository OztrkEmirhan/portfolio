import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socialinks from "./components/Socialinks";


export default function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Socialinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
    </div>
  )
}