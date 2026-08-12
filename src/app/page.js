"use client"
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParticleNetwork from "@/components/ParticleNetwork";
import ProjectCard from "@/components/ProjectCard";
import Lenis from "lenis";
import { useEffect, useState } from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "React.js",
      "Next.js",
      "Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  },
  {
    title: "Version Control",
    skills: [
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
      "Figma",
    ],
  },
];

const projects = [
  {
    title: "GoKart — E-Commerce Platform",
    description:
      "A responsive e-commerce application with product browsing, authentication, cart management, and product details.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "React Router",
    ],
    features: [
      "Product browsing with category filtering and sorting.",
      "Authentication and user-specific cart management.",
      "Centralized state management using Redux Toolkit.",
      "Product details and related product sections.",
      "Responsive shopping experience across devices.",
    ],
    github: "https://github.com/RkDrago/E-Commerce-website",
    live: "https://gokart-one.vercel.app/",
  },

  {
    title: "FinTrack Pro — Personal Finance Tracker",
    description:
      "A personal finance management application for tracking income, expenses, and financial activity.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage",
    ],
    features: [
      "Transaction tracking for income and expenses.",
      "User-specific data persistence using LocalStorage.",
      "Reusable components for managing transactions.",
      "Responsive dashboard for financial management.",
    ],
    github: "https://github.com/RkDrago/Finance-Tracker-Dashboard",
    live: "https://starlit-duckanoo-ee7362.netlify.app/",
  },

  {
    title: "ProductiveHQ — Productivity Dashboard",
    description:
      "A productivity dashboard designed to organize tasks and provide a focused workspace for managing daily activities.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "LocalStorage"
    ],
    features: [
      "Interactive productivity dashboard.",
      "Reusable React components.",
      "Responsive interface for different screen sizes.",
      "Clean and intuitive user experience.",
    ],
    github: "https://github.com/RkDrago/Productive_HQ-Dashboard",
    live: "https://phenomenal-otter-07a247.netlify.app/",
  },

  {
    title: "MovieHunt — Movie Watchlist",
    description:
      "A movie discovery and watchlist application that allows users to explore movies, view details, and manage their personal watchlist.",
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
    ],
    features: [
      "Built a movie discovery interface with personalized user interactions.",
      "Implemented movie search and recommendations.",
      "Created secure authentication and user-specific data access.",
      "Optimized API requests for fast movie search and filtering.",
      "Designed a responsive UI for seamless browsing across devices.",
    ],
    github: "https://github.com/RkDrago/Movie_Hunt",
    live: "https://movie-hunt-nij3.onrender.com/",
  },
];

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Remote",
    duration: "Jan 2025 — Present",
    points: [
      "Designed, developed, and deployed responsive web applications using React, MongoDB, Node.js, Express.js and Next.js.",
      "Improved application performance by 30–40%, reducing load times by ~2s.",
      "Improved site performance and SEO rankings through optimization.",
      "Delivered projects end-to-end with 100% on-time completion.",
    ],
  },
];

const education = [
  {
    institution: "BBMKU, Dhanbad",
    degree: "Bachelor of Science in Physics",
    duration: "2021 — 2024",
    grade: "GPA — 6+",
  },
];

export default function Home() {
  const [isHeavy, setIsHeavy] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleFirstScroll = () => {
      setIsHeavy(true)

      window.removeEventListener("scroll", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0
        ? window.scrollY / scrollHeight
        : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <ParticleNetwork />
      <div className="fixed top-0 w-full h-full inset-0 opacity-[1] bg-[url('/noise.jpg')] pointer-events-none object-cover" />
      <main className="z-20">

        {/* ================= HOME ================= */}
        <section
          id="home"
          className="scroll-mt-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-16 sm:px-8 md:px-10 lg:flex-row lg:gap-12 lg:px-12"
        >
          <a
            href="/blackhole"
            className={`left-0 z-50 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/10 shadow-xl sm:h-12 sm:w-12 transition-bottom duration-300 ease-out hover:shadow-2xl ${isHeavy ? "fixed bottom-0" : "fixed bottom-1000"}`}
            style={{
              transform: `translateX(calc(${scrollProgress} * (100vw - 3rem)))`,
            }}
          >
            <img
              src="/dark_matter.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </a>
          {/* Profile */}
          <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-1/2">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-black sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 z-20">
              <img
                className="h-full w-full object-cover"
                src="https://media.licdn.com/dms/image/v2/D4D03AQGqOI_CefyeIw/profile-displayphoto-scale_400_400/B4DZ7_BolYIEAg-/0/1782395080579?e=1787184000&v=beta&t=j8WNv0VUeNnOJY-BYEOx9WvHUysmbsezYr50uVMLQog"
                alt="Rudra Kant Pandey"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/rudra-kant-pandey-95bb92280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 bg-white/50 shadow-xl transition-all hover:scale-110 hover:shadow-2xl sm:h-12 sm:w-12"
              >
                <i className="ri-linkedin-box-fill text-2xl" />
              </a>

              <a
                href="mailto:rudrakp.india@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 bg-white/50 shadow-xl transition-all hover:scale-110 hover:shadow-2xl sm:h-12 sm:w-12"
              >
                <i className="ri-mail-fill text-2xl" />
              </a>

              <a
                href="https://github.com/RkDrago"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 bg-white/50 shadow-xl transition-all hover:scale-110 hover:shadow-2xl sm:h-12 sm:w-12"
              >
                <i className="ri-github-fill text-3xl" />
              </a>

              <a
                href="https://leetcode.com/u/03wGdQz9eh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500 bg-white/50 shadow-xl transition-all hover:scale-110 hover:shadow-2xl sm:h-12 sm:w-12"
              >
                <i className="ri-code-s-slash-fill text-2xl" />
              </a>
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full space-y-4 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm Rudra
            </h1>

            <h3 className="text-xl sm:text-2xl">
              MERN Stack Developer
            </h3>

            <p className="text-base leading-7 text-gray-900 sm:text-lg">
              I build fast, modern, interactive web experiences that turn ideas into clean, functional, and engaging digital products.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-5 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-8 py-3 text-center font-bold text-white shadow-blue-300 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl sm:px-10 sm:py-4"
              >
                View Projects
              </a>

              <a
                href="/Rudra-kant-Pandey_resume.pdf"
                download="Rudra-kant-Pandey_resume.pdf"
                className="flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-bold text-black transition hover:bg-black/10 sm:px-10 sm:py-4"
              >
                <span>Download Resume</span>
                <i className="ri-file-download-line" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="scroll-mt-20 mx-auto min-h-screen w-full max-w-7xl px-5 py-16 sm:px-8 md:px-10 lg:px-30"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold text-slate-800 sm:mb-16 md:text-5xl">
              About Me
            </h2>

            <div className="space-y-5 text-justify text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              <p>
                I am a dedicated{" "}
                <strong className="font-semibold text-slate-900">
                  Frontend Developer
                </strong>{" "}
                specializing in{" "}
                <strong className="font-semibold text-slate-900">
                  React and Next.js
                </strong>
                , with a strong foundation in modern JavaScript and web
                development. I focus on building{" "}
                <strong className="font-semibold text-slate-900">
                  responsive, scalable, and user-friendly web applications
                </strong>{" "}
                with clean and maintainable code.
              </p>

              <p>
                I have hands-on experience developing{" "}
                <strong className="font-semibold text-slate-900">
                  modern user interfaces
                </strong>{" "}
                using{" "}
                <strong className="font-semibold text-slate-900">
                  HTML, CSS, JavaScript (ES6+), React, Next.js, and Tailwind CSS
                </strong>
                . I enjoy creating intuitive experiences that are not only
                visually engaging but also performant and accessible across
                different devices.
              </p>

              <p>
                My experience also includes working with{" "}
                <strong className="font-semibold text-slate-900">
                  REST APIs, authentication, state management, and API integration
                </strong>
                . I have worked with{" "}
                <strong className="font-semibold text-slate-900">
                  Redux Toolkit
                </strong>{" "}
                to manage complex application state and build structured,
                scalable React applications.
              </p>

              <p>
                Through my personal and academic projects, I have gained
                practical experience in building complete web applications,
                including{" "}
                <strong className="font-semibold text-slate-900">
                  e-commerce platforms, dashboards, task management applications,
                  and finance tracking systems
                </strong>
                . I focus on writing clean code, solving problems effectively,
                and continuously improving my development skills.
              </p>

              <p>
                I am passionate about learning new technologies and turning
                ideas into{" "}
                <strong className="font-semibold text-slate-900">
                  reliable, polished, and production-ready web experiences
                </strong>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="scroll-mt-20 mx-auto min-h-screen w-full max-w-7xl px-5 py-16 sm:px-8 md:px-10 lg:px-30"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold text-slate-800 md:text-5xl">
              Skills
            </h2>

            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[20px] bg-black/10 px-3 py-4 sm:px-6 sm:py-6"
                >
                  <div className="mb-5">
                    <h2 className="text-xl font-semibold text-[#10233f] sm:text-2xl">
                      {group.title}
                    </h2>

                    <div className="mt-4 h-0.5 w-full bg-blue-600" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="cursor-pointer flex min-h-14 items-center justify-center rounded-xl border-2 border-[#e2e8f0] bg-[#96abc1] px-2 text-center text-sm font-medium text-[#10233f] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md sm:text-base"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="scroll-mt-20 mx-auto min-h-screen w-full max-w-7xl px-5 py-16 sm:px-8 md:px-10 lg:px-30"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold text-slate-800 sm:mb-16 md:text-5xl">
              Projects
            </h2>

            <div className="">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section
          id="experience"
          className="scroll-mt-20 mx-auto min-h-screen w-full max-w-7xl px-5 py-16 sm:px-8 md:px-10 lg:px-30"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold text-slate-800 sm:mb-16 md:text-5xl">
              Experience & Education
            </h2>

            <div className="space-y-6">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className="rounded-[20px] bg-black/10 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-semibold text-[#10233f] sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-medium text-blue-800/90">
                        {experience.company}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      {experience.duration}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-gray-700 sm:text-base"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article
                  key={item.institution}
                  className="rounded-[20px] bg-black/10 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-semibold text-[#10233f] sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-1 font-medium text-blue-800/90">
                        {item.institution}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-gray-500">
                      {item.duration}
                    </p>
                  </div>

                  <p className="mt-5 font-medium text-gray-600">
                    {item.grade}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="scroll-mt-20 mx-auto min-h-screen w-full max-w-7xl px-5 py-16 sm:px-8 md:px-10 lg:px-30"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-4xl font-bold text-slate-800 sm:mb-12 md:text-5xl">
              Get In Touch
            </h2>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="rounded-[20px] bg-linear-140 from-blue-800/50 to-gray-600/70 p-5 text-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] sm:p-8">
                <h3 className="text-2xl font-semibold">
                  Let's Connect
                </h3>

                <p className="mt-4 leading-7 text-gray-200">
                  Open to discussing new projects, opportunities,
                  collaborations, or interesting ideas.
                </p>

                <div className="mt-8 space-y-6">

                  <a
                    href="mailto:rudrakp.india@gmail.com"
                    className="group flex min-w-0 items-center gap-4"
                  >
                    <div className="shrink-0 rounded-lg bg-white/10 px-3 py-2 transition group-hover:bg-white/70 group-hover:text-[#10233f]">
                      <i className="ri-mail-fill text-xl" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase text-gray-300">
                        Email
                      </p>

                      <p className="break-all font-medium">
                        rudrakp.india@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/Kolkata%2C%20India"
                    target="_blank"
                    className="group flex min-w-0 items-center gap-4"
                  >
                    <div className="shrink-0 rounded-lg bg-white/10 px-3 py-2 transition group-hover:bg-white/70 group-hover:text-[#10233f]">
                      <i className="ri-map-pin-fill text-xl" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase text-gray-300">
                        Location
                      </p>

                      <p className="font-medium">
                        Kolkata, India
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-10">
                  <p className="mb-4 text-xs font-bold uppercase text-gray-300">
                    Find me online
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://github.com/RkDrago"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="rounded-lg bg-white/10 px-3 py-2 transition-all hover:bg-white/70 hover:text-[#10233f]"
                    >
                      <i className="ri-github-fill text-3xl" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rudra-kant-pandey-95bb92280/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="rounded-lg bg-white/10 px-3 py-2 transition-all hover:bg-white/70 hover:text-[#10233f]"
                    >
                      <i className="ri-linkedin-box-fill text-3xl" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
