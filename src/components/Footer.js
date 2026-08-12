import { Mail, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className={`relative px-4 pb-6 pt-16 text-white sm:px-6 sm:pt-20 lg:pt-24 ${pathname === "/blackhole" ? "bg-[#08080800]" : "bg-[#080808]"}`}>
      <div className="mx-auto max-w-7xl">

        {/* CTA */}
        <div className="border-b border-white/10 pb-12 sm:pb-16 lg:pb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40 sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
            Have a project in mind?
          </p>

          <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let's build something
              <span className="text-white/30"> great.</span>
            </h2>

            <a
              href="mailto:rudrakp.india@gmail.com"
              aria-label="Send me an email"
              className="group flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full bg-white text-black transition duration-300 hover:scale-110 sm:h-16 sm:w-16 md:self-auto"
            >
              <ArrowUpRight
                size={23}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-10 py-10 sm:gap-12 sm:py-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-semibold">
              rudrakp<span className="text-white/30">.</span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
              Frontend-focused developer building clean,
              scalable and thoughtful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-white/30">
              Navigation
            </p>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#home"
                  className="inline-block transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="inline-block transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="inline-block transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="inline-block transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-widest text-white/30">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <i className="ri-github-line text-base" />
                GitHub
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <i className="ri-linkedin-fill text-base" />
                LinkedIn
              </a>

              <a
                href="mailto:rudrakp.india@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex px-0 sm:px-10 2xl:px-0 flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
          <p className="text-center">
            © 2026 rudrakp. All rights reserved.
          </p>

          <p className="flex justify-center items-center gap-1">
            Designed & built with
            <i className="ri-poker-hearts-fill text-white/50" />
            & Next.js
          </p>
        </div>

      </div>
      <img
        src="/hand.png"
        alt=""
        className="invert h-20 absolute right-6 rotate-150 bottom-12 object-cover"
      />
    </footer>
  );
};

export default Footer;
