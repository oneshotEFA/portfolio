import Navbar from "./componets/nav";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./pages/foooter";
import Hero from "./pages/hero";
import Skills from "./pages/skill";
import Projects from "./pages/project";

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
