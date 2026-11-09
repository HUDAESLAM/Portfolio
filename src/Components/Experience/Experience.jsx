import  { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaCode, FaChalkboardTeacher, FaUsers, FaUserCheck, FaTasks } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id :1,
    title : "Programming Instructor",
    company: "iSchool | Digital Egypt Cubs Initiative (DECI)",
    date: "06/2026 - 09/2026",
    description: [
      "Mentored and educated youth on core computer science fundamentals, algorithmic thinking and problem-solving techniques.",
      "Delivered interactive coding workshops for diverse groups, achieving high student engagement and hands-on skill retention.",
      "Evaluated individual progress, providing personalized technical coaching to resolve complex learning blockers efficiently.",
      "Guided students through building end-to-end practical projects, translating technical concepts into actionable, easy-to-grasp solutions.",
      "Fostered a collaborative, high-energy learning environment focused on modern digital literacy and logical reasoning."
    ],
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 2,
    title: "Online Operations & Community Coordinator",
    company: "EYouth (ITIDA Gigs Project)",
    date: "07/2025 - 04/2026",
    description: [
      "Managed communication and provided end-to-end operational support for 500+ participants, maximizing retention and program satisfaction.",
      "Resolved technical and logistical blockers for students, ensuring seamless navigation of digital learning platforms and tools.",
      "Structured and coordinated online session schedules between trainers and participants, maintaining strict adherence to timelines.",
      "Monitored live session execution, attendance metrics and performance reporting to ensure high training quality control.",
      "Cross-collaborated with multi-functional teams to streamline workflows and optimize overall program operations."
    ],
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    title: "Frontend Developer Trainee",
    company: "Route - IT Training Center",
    date: "02/2025 - 09/2025 ",
    description: [
      "Architected and developed high performance web applications using React.js and Next.js,leveraging TypeScript to ensure static typing and maintainable code.",
      "Optimized web performance and improved Lighthouse scores by implementing code splitting, lazy loading and image optimization.",
      "Developed pixel-perfect, responsive UI designs from scratch using Tailwind CSS and Bootstrap, ensuring compatibility across all mobile and desktop devices.",
      "Implemented secure JWT Authentication flows and managed protected routes to enhance application security and session management.",
      "Integrated complex RESTful APIs and handled asynchronous data fetching using Axios, ensuring seamless data flow between frontend and backend.",
      "Collaborated in a professional development environment using GitHub for version control and participating in structured code reviews.",
      "Managed automated deployments and hosting configurations using Vercel",
      "Implemented Next.js Middleware to handle robust route protection, session management and server-side logic."
    ],
    icon: <FaBriefcase />,
  },
  {
    id: 4,
    title: "Frontend Developer (Graduation Project) ",
    company: "BabyWhisper App ",
    date: "10/2024 - 07/2025 ",
    description: [
      "Designed and implemented responsive frontend architecture using React.js.",
      "Translated complex Figma prototypes into functional UIs.",
      "Managed end-to-end API communication and debugged endpoints using Postman to ensure 100% data accuracy.",
      "Built a fully authenticated system with secure user login, signup and profile management features.",
      "Coordinated with the backend team in an Agile environment to deliver a production-ready application within strict deadlines.",
    ],
    icon: <FaCode />,
  },
  {
    id: 5,
    title: "Online Coordinator",
    company: "EYouth Company",
    date: "07/2024 - 06/2025",
    description: [
      "Facilitated seamless communication channels between online instructors, students and administrative stakeholders.",
      "Provided rapid incident management and troubleshooting for online learning management systems (LMS) and virtual classrooms.",
      "Tracked student participation metrics and generated analytics reports to identify and address learning irregularities proactively.",
      "Coordinated virtual events, large-scale training workshops and executive meetings across multiple digital environments.",
      "Optimized educational logistics, resource allocation and facility scheduling to improve operational throughput."
    ],
    icon: <FaUsers />,
  },
  {
    id: 6,
    title: "Educational Operations Coordinator",
    company: "Almentor Company",
    date: "08/2024 - 10/2024",
    description: [
      "Served as the key liaison between instructors and the core educational development team to align learning objectives.",
      "Assessed student progress and instructor metrics, delivering actionable feedback and strategic guidance to optimize outcomes.",
      "Led and participated in stakeholder evaluation meetings to address curriculum enhancements and educational challenges.",
      "Facilitated professional onboarding and specialized training programs for both instructors and learners.",
      "Conducted comprehensive needs assessments to identify knowledge gaps and enhance instructional methodologies."
    ],
    icon: <FaUserCheck />,
  },
  {
    id: 7,
    title: "Program Coordinator",
    company: "Almentor / Digital Egypt Pioneers Initiative (DEPI)",
    date: "01/2023 - 10/2024",
    description: [
      "Orchestrated meeting schedules, resource alignment and logistics for cross-functional project contributors.",
      "Authored professional internal communication assets, operational updates and documentation for key initiative milestones.",
      "Reviewed and refined instructional and operational deliverables to ensure compliance with strict quality control frameworks.",
      "Edited, formatted , approved final digital products and training resources in accordance with enterprise guidelines."
    ],
    icon: <FaTasks />,
  },
  {
    id: 8,
    title: "Frontend Development Trainee ",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "06/2023 - 02/2024 ",
    description: [
      "Mastered modern web development fundamentals, including ES6+ JavaScript, HTML5 and CSS3.",
      "Applied UI/UX principles to enhance web usability.",
      "Built several responsive web projects using Mobile-First design approaches and modern CSS layout techniques.",
      "Enhanced professional soft skills, including effective communication, team collaboration and time management.",
      "Conducted unit testing for UI components to ensure functionality and prevent regressions during development."
    ],
    icon: <FaGraduationCap />,
  }
];

export default function Experience() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".exp-card", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".exp-card", 
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My <span className="text-pink-300">Experience</span>
          </h2>
          <div className="h-1.5 w-20 bg-pink-300 rounded-full mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-pink-100 dark:border-pink-900/30 ml-4 md:ml-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-card relative mb-12 ml-8">
              
              <div className="absolute top-0 -left-11.25 w-10 h-10 bg-white dark:bg-dark-gray border-4 border-pink-300 rounded-full flex items-center justify-center text-pink-300 z-10 shadow-lg">
                {exp.icon}
              </div>

              <div className="bg-slate-50 dark:bg-dark-gray p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-pink-300/30 transition-all group">
                <span className="inline-block px-3 py-1 rounded-lg bg-pink-50 dark:bg-pink-300/10 text-pink-300 text-[10px] font-bold mb-3 uppercase tracking-tighter">
                  {exp.date}
                </span>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-1 tracking-tight">
                  {exp.title}
                </h3>
                <h4 className="text-pink-300 font-bold mb-4 text-sm">{exp.company}</h4>
                
                <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400 list-disc pl-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}