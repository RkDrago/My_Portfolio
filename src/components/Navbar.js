"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        `#${visibleSections[0].target.id}`
                    );
                }
            },
            {
                threshold: [0.2, 0.4, 0.6, 0.8],
                rootMargin: "-80px 0px -20% 0px",
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-gray-300/20 backdrop-blur-2xl shadow-xl">
            <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3"
                >
                    <div className="h-11 w-11 shrink-0 cursor-grab overflow-hidden rounded-full border-2 border-gray-600 active:cursor-grabbing sm:h-13 sm:w-13">
                        <img
                            className="h-full w-full object-cover"
                            src="/logo/site_logo1.jpg"
                            alt="Rudra Kant Pandey"
                            draggable="false"
                        />
                    </div>

                    <div className="leading-tight">
                        <p className="text-sm font-bold sm:text-lg">
                            Rudra Kant Pandey
                        </p>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            Full Stack Developer
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`cursor-pointer text-xs font-extrabold uppercase transition-colors xl:text-sm ${
                                activeSection === link.href
                                    ? "text-black"
                                    : "text-gray-500/90 hover:text-black"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-black/5 lg:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div
                className={`overflow-hidden border-t border-black/5 bg-white/80 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
                    menuOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`border-b border-black/5 py-4 text-sm font-extrabold uppercase transition-colors last:border-0 ${
                                activeSection === link.href
                                    ? "text-black"
                                    : "text-gray-600 hover:text-black"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;