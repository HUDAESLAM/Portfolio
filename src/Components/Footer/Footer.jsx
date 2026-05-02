import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-dark-gray text-slate-600 dark:text-gray-400 py-5 px-8 md:px-16 border-t border-gray-100 dark:border-white/5 ">
      
      <div className="max-w-300 mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-15">
          
          <div className="flex-1 min-w-75">
            <h2 className="text-3xl font-bold text-pink-300 mb-4">
              Huda Islam
            </h2>
            <p className="text-lg font-medium text-slate-700 dark:text-gray-300 mb-3">Frontend Engineer</p>
            <p className="max-w-sm">
              Building modern, interactive web experiences with passion and precision.
            </p>
            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-gray-200">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              Available for opportunities
            </div>
          </div>

          <div className="flex flex-wrap flex-2 justify-between gap-10">
            <div className="min-w-30">
              <h3 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to={'/'} className="hover:text-pink-400 transition-colors">Home</Link></li>
                <li><Link to={'/Contact'} className="hover:text-pink-400 transition-colors">Contact</Link></li>
                <li><Link to={'/experience'} className="hover:text-pink-400 transition-colors">Experience</Link></li>
              </ul>
            </div>

            <div className="min-w-50">
              <h3 className="text-slate-900 dark:text-white font-medium mb-6 uppercase text-sm">Tech Stack</h3>
              <p className="text-sm mb-4">Built with React, Tailwind CSS & GSAP</p>
              <div className="flex flex-wrap gap-2">
                {["REACT", "TAILWIND", "GSAP"].map((tech) => (
                  <span key={tech} className="bg-slate-100 dark:bg-slate-900 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-md text-[13px] font-medium text-slate-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-w-45 flex flex-col items-start lg:items-end text-left lg:text-right">
              <h3 className="text-slate-800 dark:text-white mb-6 font-medium uppercase text-sm">Social Connect</h3>
              <div className="flex gap-3 mb-8">
                {[
                  { Icon: FaGithub, link: "https://github.com/HUDAESLAM" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/huda-eslam-4351b724b/" },
                  { Icon: FaEnvelope, link: "mailto:hudaeslamkhalifa@gmail.com" }
                ].map((item, idx) => (
                  <a key={idx} href={item.link} className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl hover:bg-pink-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                    <item.Icon size={20} />
                  </a>
                ))}
              </div>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-pink-400 transition-colors cursor-pointer group"
              >
                Back to top 
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-pink-400 group-hover:text-white transition-all">
                  <FaChevronUp size={14} />
                </span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
  <p>© {new Date().getFullYear()} Huda Islam Khalifa. All rights reserved.</p>
  <p>Built using React</p>
</div>
      </div>
    </footer>
  );
}