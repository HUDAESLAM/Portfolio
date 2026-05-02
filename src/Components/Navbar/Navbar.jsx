import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ mode, changeMode }) {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="pt-5 relative z-50 tracking-tighter">
        <div className="container">
          <div className=" bg-gray-100 backdrop-blur-md dark:bg-gray-400 dark:text-white p-4 lg:p-6 sm:px:0 rounded-full max-w-4xl lg:mx-auto mx-4 shadow-sm flex items-center justify-between transition-all duration-500">
            <h2 className="text-xl font-bold cursor-pointer text-gray-800 dark:text-pink-200">
              <Link to={"/"}>Portfolio</Link>
            </h2>

            <div className="list order-first lg:order-0">
              <ul className="hidden lg:flex items-center gap-8 font-medium">
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-pink-300"
                          : "hover:text-pink-200 transition-colors"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="lg:hidden" onClick={() => setOpen(!open)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3 border-r pr-4 border-gray-300 dark:border-gray-600">
                <a
                  href="https://www.linkedin.com/in/huda-eslam-4351b724b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-200 transition-colors"
                >
                  <FaLinkedin className="size-5" />
                </a>
                <a
                  href="https://github.com/HUDAESLAM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-200 transition-colors"
                >
                  <FaGithub className="size-5" />
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-400 dark:hover:text-pink-200 transition-colors"
                >
                  <FaEnvelope className="size-5" />
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div
                  onClick={() => changeMode()}
                  className="cursor-pointer transition-all"
                >
                  {mode == "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {open ? (
              <ul className="space-y-2 mt-2 cursor-pointer lg:hidden absolute top-24 left-4 right-4 bg-white dark:bg-dark-gray shadow-xl rounded-3xl p-3 transition-all animate-in fade-in zoom-in duration-300 flex flex-col gap-5 text-center font-medium">
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-pink-300"
                          : "hover:text-pink-200 transition-colors"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <hr className="border-gray-200 dark:border-gray-700 my-2" />

                <div className="flex items-center justify-center gap-6 py-2">
                  <a
                    href="https://www.linkedin.com/in/huda-eslam-4351b724b/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <FaLinkedin className="size-6" />
                  </a>
                  <a
                    href="https://github.com/HUDAESLAM"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <FaGithub className="size-6" />
                  </a>
                  <a
                    href="mailto:hudaeslamkhalifa@gmail.com"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <FaEnvelope className="size-6" />
                  </a>
                </div>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
