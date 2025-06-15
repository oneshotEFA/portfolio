

const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-[rgb(84,184,229)] ">
          Eph
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-bold">
          <li>
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
