import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma, FaBootstrap, FaSass 
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiFramer,SiShadcnui } from "react-icons/si";
import { MdOutlineDevices } from "react-icons/md";

const skillsData = [
  {
    category: "Core Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Sass/SCSS", icon: <FaSass className="text-pink-500" /> },
      { name: "Shadcn/ui", icon: <SiShadcnui className="text-teal-400" /> },
      { name: "GSAP", icon: <div className="text-[10px] font-black text-green-500">GSAP</div> },
      { name: "Responsive", icon: <MdOutlineDevices className="text-slate-500" /> },
    ],
  },
  {
    category: "Tools & State",
    items: [
      { name: "Redux ", icon: <SiRedux className="text-purple-500" /> },
      { name: "Git & GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
      { name: "REST APIs", icon: <div className="text-[10px] font-bold">Fetch</div> },
    ],
  },
];

const scrollingIcons = [
  <FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <SiNextdotjs />, <SiRedux/>,
  <SiTypescript />, <SiTailwindcss />, <SiRedux />, <FaGithub />, <SiFramer />,<SiShadcnui/>
];

export default function Skills() {
  const container = useRef();

  useGSAP(() => {
    gsap.to(".scroll-track", {
      xPercent: -50,
      repeat: -1,
      duration: 15, 
      ease: "none",
    });
  }, { scope: container });

  return (
    <section ref={container} className=" overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="h-1 w-20 bg-pink-300 rounded-full mx-auto"></div>
        </div>

        <div className="relative mb-24 flex overflow-hidden">
          <div className="scroll-track flex gap-16 items-center whitespace-nowrap py-4">
            {[...scrollingIcons, ...scrollingIcons, ...scrollingIcons].map((icon, index) => (
              <div key={index} className="text-6xl text-gray-600/10 dark:text-gray-400/8 hover:text-pink-300 transition-colors duration-300">
                {icon}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-35 bg-linear-to-r from-white dark:from-dark-gray to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-35 bg-linear-to-l from-white dark:from-dark-gray  to-transparent z-10"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((group, idx) => (
            <div 
              key={idx} 
              className="flex-1 min-w-75 max-w-95 bg-slate-50 dark:bg-[#111] p-10 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-pink-400/5 transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-pink-400 rounded-full inline-block"></span>
                {group.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-y-10">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center group cursor-default">
                    <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-black text-slate-500 dark:text-gray-400 uppercase tracking-widest group-hover:text-pink-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}