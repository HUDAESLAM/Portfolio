import {  FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiAxios, SiJavascript, SiBootstrap, SiHtml5 } from "react-icons/si";
import Ecommerce from "../../assets/Ecommerce.png"
import BookmarkImage from "../../assets/bookmark.png"
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Featured Web App",
    image: Ecommerce, 
    description: "A comprehensive ecommerce solution featuring secure Route Protection and session management via Next.js Middleware. Integrated with JWT authentication and online payment workflows for a seamless user experience",
    tags: ["Next.js", "TypeScript", "Tailwind", "JWT"],
    icons: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />, <SiAxios />],
    demo: "https://e-commerce1-ashen.vercel.app/"
  },

  {
    id: 2,
    title: "Bookmark Manager",
    category: "Web Tool",
    image: BookmarkImage , 
    description: "A functional web app for managing favorite links. Features real-time Regex validation, persistent data with LocalStorage, and a responsive Bootstrap UI with SweetAlert notifications.",
    tags: ["JavaScript", "Bootstrap", "LocalStorage"],
    icons: [<SiJavascript />, <SiBootstrap />, <SiHtml5 />],
    demo: "https://hudaeslam.github.io/Bookmark/"
  },
];

export default function Projects() {
  return (
    <section className=" px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-pink-40 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-pink-300 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects?.map((project) => (
            <div key={project.id} className="group relative bg-slate-50 dark:bg-[#111] rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 hover:border-pink-300/20 transition-all duration-500 shadow-xl ">
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-black rounded-full hover:bg-pink-300 hover:text-white transition-all transform hover:scale-110 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-pink-300 uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2 text-slate-400 dark:text-gray-600">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="text-lg">{icon}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8 line-clamp-3 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-white dark:bg-slate-950 border border-gray-100 dark:border-white/10 rounded-full text-[10px] font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}