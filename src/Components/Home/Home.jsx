import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Huda from "../../assets/HUDA.jpeg";
import { Link } from "react-router-dom";
import myCV from "../../../public/Huda-Eslam-Cv.pdf";

export default function Home() {
  const container = useRef();
  const orb1 = useRef();
  const orb2 = useRef();

  useGSAP(
    () => {
      gsap.from(".hero-img", {
        scale: 0.5,
        opacity: 0,
        duration: 3,
        ease: "back.out(1.05)",
      });

      gsap.to(orb1.current, {
        x: "25vw",
        y: "15vh",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2.current, {
        x: -100,
        y: -50,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 5,
        stagger: 0.2,
      });

      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.to(".hero-img", {
        y: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <>
      <section
        ref={container}
        className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 min-h-[80vh] px-6 py-10"
      >
        <div
          ref={orb1}
          className="absolute top-10 left-10 w-80 h-80 bg-pink-300 opacity-40 blur-[100px] rounded-full z-0"
        ></div>

        <div
          ref={orb2}
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 opacity-30 blur-[120px] rounded-full z-0"
        ></div>
        <div className="hero-content z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="relative hero-img size-64 lg:size-96 rounded-full overflow-hidden shadow-2xl shadow-pink-200 dark:shadow-none transition-colors duration-500">
            <img
              src={Huda}
              alt="HudaEslam"
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <h1 className="hero-text text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white leading-tight">
              Hello, I'm{" "}
              <span className="text-pink-300 dark:text-pink-200 drop-shadow-sm">
                Huda Eslam Khalifa
              </span>
            </h1>
            <p className="hero-text mt-6 text-sm md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              Junior Frontend Developer with a strong foundation in React.js and Next.js, dedicated to building responsive and performant user interfaces. Experienced in taking UI features from concept to production within Agile environments, with a focus on writing clean, maintainable code and optimizing user experience.
            </p>
            <div className="hero-text mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                to={"projects"}
                className="px-7 py-2.5  text-gray-400 rounded-full font-bold text-lg 
                      hover:bg-pink-200 hover:scale-95 active:scale-95 
                      transition-all duration-300 shadow-lg shadow-pink-200 
                      dark:shadow-none inline-block"
              >
                View Projects
              </Link>

              <a
                href={myCV}
                download="Huda-Eslam-CV.pdf"
                className="px-7 py-2.5 text-pink-300 dark:text-pink-300 rounded-full font-bold text-lg 
                hover:bg-pink-50 hover:dark:bg-pink-900/20 hover:scale-95 active:scale-95 
                transition-all duration-300 flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12l4.5 4.5m0 0 4.5-4.5M12 3v13.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
