import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import cer1 from "../../assets/HUDA.png";
import cer2 from "../../assets/HudaIslamKhalifa.png";
import cer3 from "../../assets/Huda Eslam.jpg"
import cer4 from "../../assets/Hoda Islam Mamdouh Soliman Khalifa.jpg"
import cer5 from "../../assets/Certificate.jpeg"

import { useRef, useState } from "react";

const certsData = [
  {
    id: 1,
    title: "FrontEnd developer",
    issuer: "Route-it Training Center",
    image: cer1,
  },
  {
    id: 2,
    title: "FrontEnd developer",
    issuer: "Digital Egypt Pioneers Program (DEPI)",
    image: cer2,
  },
  {
    id: 3,
    title: "Online Operations & Community Coordinator",
    issuer: "EYouth (ITIDA Gigs Project)",
    image: cer3,
  },
  {
    id: 4,
    title: "Almentor",
    issuer: "Educational Operations Coordinator",
    image: cer4,
  },
  {
    id: 1,
    title: "Software Engineer",
    issuer: "Graduation Certificate",
    image: cer5,
  },
  
];

export default function Certificates() {
  const container = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  useGSAP(
    () => {
      gsap.from(".cert-title", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".cert-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );
  return (
    <>
      <section ref={container} className=" px-6 relative">
        <div className="text-center">
          <h2 className="cert-title text-4xl md:text-5xl font-black text-gray-800 dark:text-white">
            My <span className="text-pink-300">Certificates</span>
          </h2>
        </div>
        <div className="cert-title mt-4 h-1 w-20 bg-pink-300 rounded-full mx-auto"></div>

        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-8 mx-auto py-10">
          {certsData.map((cert) => (
            <div
              key={cert.id}
              className="cert-card bg-white dark:bg-dark-gray rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 w-full max-w-125"
            >
              <div className="relative group overflow-hidden rounded-2xl bg-slate-100 aspect-[1.4/1]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="bg-white text-pink-300 px-7 py-3 rounded-xl font-bold shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                  >
                    view Certificate
                  </button>
                </div>
              </div>

              <div className="mt-6 px-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                  {cert.issuer}
                </h3>
                <p className="text-pink-400 font-bold uppercase text-sm mt-2 tracking-widest mb-2">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-9999 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                className="w-fit h-screen rounded-xl shadow-2xl border-4 border-white/10"
                alt="Preview"
              />

              <button
                className="cursor-pointer absolute -top-12 right-0 text-white text-lg font-bold hover:text-pink-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
