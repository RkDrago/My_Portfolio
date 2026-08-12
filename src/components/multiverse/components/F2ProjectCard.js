"use client"
import { useState } from "react";
import { Code2, ExternalLink, ChevronDown } from "lucide-react";

const F2ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`page-section 
        overflow-hidden
        border-b border-[#dbe3ed]
        bg-white/10
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        ${isOpen ? "shadow-[0_20px_45px_rgba(0,0,0,0.1)]" : ""}
      `}
    >
      {/* ================= RIBBON ================= */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          group flex w-full items-center justify-between
          gap-6
          px-6 py-5
          text-left
          transition-all duration-300
          hover:bg-white/20
          sm:px-8
        "
      >
        {/* Left */}
        <div className="flex min-w-0 items-center gap-4">

          {/* Number / Ribbon marker */}
          <div
            className="
              relative flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-t-sm
              bg-white/20
              text-sm font-bold text-white
            "
          >
            <span>{project.id}</span>

            {/* Ribbon tail */}
            <span
              className="
                absolute -bottom-2 left-0
                h-2 w-0
                border-l-20 border-r-20
                border-t-8
                border-l-transparent
                border-r-transparent
                border-t-white/50
              "
            />
          </div>

          {/* Title */}
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-lg font-bold
                text-white/60
                transition-colors
                sm:text-xl
              "
            >
              {project.title}
            </h3>

            <div className="mt-1 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((technology) => (
                <span
                  key={technology}
                  className="
                    text-xs font-medium
                    text-gray-400
                  "
                >
                  {technology}
                </span>
              ))}

              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ChevronDown
          size={21}
          className={`
            shrink-0 text-gray-500
            transition-transform duration-300
            ${isOpen ? "rotate-180 text-blue-600" : ""}
          `}
        />
      </button>

      {/* ================= DETAILS ================= */}

      <div
        className={`
          grid transition-[grid-template-rows]
          duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">

          <div className="border-t border-[#dbe3ed] px-6 pb-7 pt-6 sm:px-8 relative">

            {/* Blue divider */}
            <div className="h-1 w-full rounded-full bg-yellow-300/50 absolute top-0 left-0" />

            {/* Description */}
            <p className="max-w-3xl leading-7 text-gray-200">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border border-[#dbe3ed]
                      bg-[#f8fafc]
                      px-3 py-1.5
                      text-sm font-medium
                      text-[#10233f]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-400">
                Key Features
              </h4>

              <ul className="space-y-2 text-gray-200">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 leading-6"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  inline-flex items-center gap-2
                  rounded-lg
                  bg-white/20
                  px-4 py-2.5
                  text-sm font-medium text-white
                  transition
                  hover:bg-white/10
                "
              >
                <Code2 size={17} />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  inline-flex items-center gap-2
                  rounded-lg
                  border border-[#10233f]
                  bg-yellow-300
                  px-4 py-2.5
                  text-sm font-medium
                  text-[#10233f]
                  transition
                  hover:bg-yellow-300/80
                "
              >
                <ExternalLink size={17} />
                Live Demo
              </a>

            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default F2ProjectCard;