"use client"
import Folio2 from '@/components/multiverse/Folio2'
import React, { useEffect } from 'react'
import Lenis from 'lenis';

const page = () => {
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
    return (
        <div>
            <Folio2 />
        </div>
    )
}

export default page
