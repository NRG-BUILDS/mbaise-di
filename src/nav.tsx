import { useState } from "react";
import { Link } from "react-router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      x-data="{ isOpen: false }"
      className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between"
    >
      <div className="flex items-center justify-between">
        <div>
          <a
            className="text-2xl font-bold text-gray-800 hover:text-gray-700 no-dark:text-white no-dark:hover:text-gray-300 lg:text-3xl"
            href="#"
          >
            Mbaise-di
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            x-cloak
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none no-dark:text-gray-200 no-dark:hover:text-gray-400 no-dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        data-open={isOpen ? "true" : "false"}
        className="data-[open=false]:h-0 data-[open=false]:p-0 overflow-hidden lg:data-[open=false]:h-auto lg:data-[open=false]:p-auto absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out no-dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:no-dark:bg-transparent"
      >
        <div className="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
          <a
            className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 no-dark:text-gray-200 no-dark:hover:text-blue-400 lg:mx-8"
            href="#"
          >
            Home
          </a>
          <a
            className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 no-dark:text-gray-200 no-dark:hover:text-blue-400 lg:mx-8"
            href="#who-are-we"
          >
            Who Are We?
          </a>
          <a
            className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 no-dark:text-gray-200 no-dark:hover:text-blue-400 lg:mx-8"
            href="#history"
          >
            History
          </a>
          <Link
            className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 no-dark:text-gray-200 no-dark:hover:text-blue-400 lg:mx-8"
            to="/news"
          >
            News
          </Link>
          <a
            className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 no-dark:text-gray-200 no-dark:hover:text-blue-400 lg:mx-8"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <a
          className="mt-4 block rounded-lg bg-blue-600 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
          href="#who-are-we"
        >
          {" "}
          Learn More{" "}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
