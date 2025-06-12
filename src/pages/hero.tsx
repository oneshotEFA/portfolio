
import img1 from "../assets/owner.jpeg";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-[rgb(25,28,50)] overflow-hidden"
    >
      <div className="container mt-40 sm:mt-0 px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="block text-gray-300">Hello, I'm </span>
            <Typewriter
              words={["Ephrem Mesfin", "Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={270}
              delaySpeed={120}
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            backend engineer & app developer
          </p>
          <p className="text-gray-300 max-w-xl">
            A little expert on backend with clean and maintainable code base
            cutting-edge technology.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[rgb(84,184,229)] hover:bg-[rgb(84,184,250)] text-white rounded-lg font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[rgb(84,184,229)] hover:bg-[rgb(84,184,229)] text-white rounded-lg font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-900 rounded-full p-2 shadow-lg transform hover:scale-105 transition-transform">
            <img
              src={img1}
              className="w-100 h-100 object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
