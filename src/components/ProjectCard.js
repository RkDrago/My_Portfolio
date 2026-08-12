"use client"
import { useState } from "react";
import { Code2, ExternalLink, ChevronDown } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={`
        overflow-hidden rounded-4xl
        mb-2
        border border-[#dbe3ed]
        bg-black/10
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
        ${isOpen ? "shadow-[0_20px_45px_rgba(0,0,0,0.1)]" : ""}
        `}
        >
      {/* ================= RIBBON ================= */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          group flex w-full items-center justify-between
          gap-6
          px-6 py-5
          text-left
          transition-all duration-300
          hover:bg-[#f8fafc]
          sm:px-8
          ${isOpen ? "bg-white" : ""}
        `}
      >
        {/* Left */}
        <div className="flex min-w-0 items-center gap-4">

          {/* Number / Ribbon marker */}
          <div
            className="
              relative flex h-10 w-10 shrink-0
              items-center justify-center
              bg-[#10233f]
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
                border-t-[#10233f]
              "
            />
          </div>

          {/* Title */}
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-lg font-bold
                text-[#10233f]
                transition-colors
                group-hover:text-blue-600
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
                    text-gray-500
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

          <div className="border-t border-[#dbe3ed] px-6 pb-7 pt-6 sm:px-8">

            {/* Blue divider */}
            <div className="mb-6 h-1 w-16 rounded-full bg-blue-600" />

            {/* Description */}
            <p className="max-w-3xl leading-7 text-gray-600">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#10233f]">
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
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#10233f]">
                Key Features
              </h4>

              <ul className="space-y-2 text-gray-700">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 leading-6"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
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
                  bg-[#10233f]
                  px-4 py-2.5
                  text-sm font-medium text-white
                  transition
                  hover:bg-blue-600
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
                  px-4 py-2.5
                  text-sm font-medium
                  text-[#10233f]
                  transition
                  hover:bg-[#10233f]
                  hover:text-white
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

export default ProjectCard;