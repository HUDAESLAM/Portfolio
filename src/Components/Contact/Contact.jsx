import { useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contact() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".contact-item", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
    gsap.from(".contact-form", {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section ref={container} className="px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Get In <span className="text-pink-300">Touch</span>
          </h2>
          <div className="h-1 w-35 bg-pink-300 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
              Passionate about building clean UIs and learning new technologies. I'm always open to discussing frontend trends or exploring full-time opportunities with innovative teams.
            </p>

            <div className="space-y-6">
              <div className="contact-item flex items-center gap-5 group">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-400/10 flex items-center justify-center rounded-2xl text-pink-400 group-hover:bg-pink-400 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mail me</p>
                  <a href="mailto:hudaeslamkhalifa@gmail.com" className="text-slate-900 dark:text-white font-semibold hover:text-pink-400 transition-colors">
                    hudaeslamkhalifa@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-center gap-5 group">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-400/10 flex items-center justify-center rounded-2xl text-pink-400 group-hover:bg-pink-400 group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call me</p>
                  <a href="tel:01013122119" className="text-slate-900 dark:text-white font-semibold hover:text-pink-400 transition-colors">
                    +20 101 312 2119
                  </a>
                </div>
              </div>

              <div className="contact-item pt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Follow me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/HUDAESLAM" target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-700 dark:text-white hover:bg-pink-400 hover:text-white transition-all transform hover:-translate-y-2">
                    <FaGithub size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/huda-eslam-4351b724b/" target="_blank" rel="noreferrer" className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-700 dark:text-white hover:bg-pink-400 hover:text-white transition-all transform hover:-translate-y-2">
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form bg-slate-50 dark:bg-dark-gray p-8 md:p-10 rounded-4xl border border-gray-100 dark:border-white/5 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">Your Name</label>
                  <input type="text" placeholder="Huda Islam" className="w-full p-4 bg-white dark:bg-dark-gray border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-pink-400 dark:text-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">Email Address</label>
                  <input type="email" placeholder="hudaeslam@example.com" className="w-full p-4 bg-white dark:bg-dark-gray border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-pink-400 dark:text-white transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1">Message</label>
                <textarea rows="3" placeholder="How can I help you?" className="w-full p-4 bg-white dark:bg-dark-gray border border-gray-200 dark:border-white/10 rounded-xl dark:text-white transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-pink-300 text-white font-bold rounded-xl shadow-lg hover:bg-pink-400 transition-all flex items-center justify-center gap-3 group cursor-pointer">
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}