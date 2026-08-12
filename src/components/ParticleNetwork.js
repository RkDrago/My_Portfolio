"use client";

import { useEffect, useRef } from "react";

const ParticleNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let animationFrame;
        let particles = [];

        const mouse = {
            x: null,
            y: null,
            radius: 150,
        };

        const createParticles = () => {
            particles = [];

            const width = document.documentElement.clientWidth;
            const height = window.innerHeight;

            const count = width < 768 ? 45 : 120;

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,

                    vx: (Math.random() - 0.5) * 0.45,
                    vy: (Math.random() - 0.5) * 0.45,

                    size: Math.random() * 1.4 + 0.8,
                });
            }
        };

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;

            const width = document.documentElement.clientWidth;
            const height = window.innerHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            createParticles();
        };

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (
                    particle.x <= 0 ||
                    particle.x >= document.documentElement.clientWidth
                ) {
                    particle.vx *= -1;
                }

                if (
                    particle.y <= 0 ||
                    particle.y >= window.innerHeight
                ) {
                    particle.vy *= -1;
                }
            });
        };

        const drawParticles = () => {
            particles.forEach((particle) => {
                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = "rgba(20, 20, 20, 0.8)";
                ctx.fill();
            });
        };

        const connectParticles = () => {
            const maxDistance = 130;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;

                    const distance = Math.sqrt(
                        dx * dx + dy * dy
                    );

                    if (distance < maxDistance) {
                        const opacity =
                            1 - distance / maxDistance;

                        ctx.beginPath();

                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);

                        ctx.strokeStyle = `rgba(60, 60, 60, ${opacity * 0.18
                            })`;

                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }
        };

        const connectMouse = () => {
            if (mouse.x === null || mouse.y === null) {
                return;
            }

            particles.forEach((particle) => {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;

                const distance = Math.sqrt(
                    dx * dx + dy * dy
                );

                if (distance < mouse.radius) {
                    const opacity =
                        1 - distance / mouse.radius;

                    ctx.beginPath();

                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);

                    ctx.strokeStyle = `rgba(30, 30, 30, ${opacity * 0.25
                        })`;

                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            });
        };

        const animate = () => {
            ctx.clearRect(
                0,
                0,
                document.documentElement.clientWidth,
                window.innerHeight
            );

            updateParticles();
            connectParticles();
            connectMouse();
            drawParticles();

            animationFrame =
                requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none z-10 absolute inset-0 h-full w-full"
        />
    );
};

export default ParticleNetwork;