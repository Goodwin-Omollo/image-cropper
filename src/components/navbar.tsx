'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { ThemeToggle } from './modeToggle'

const Navbar = () => {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/goodwin-omollo/image-cropper", {
                    next: { revalidate: 3600 }
                });
                const data = await res.json();
                setStars(data.stargazers_count);
            } catch (error) {
                console.log(error);
            }
        }
        fetchStars();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <Link
                    href="https://github.com/goodwin-omollo/image-cropper"
                    target="_blank"
                    className="flex items-center text-sm gap-2 bg-muted/50 px-3 py-1 rounded-lg"
                >
                    <FaGithub size={16} /> ⭐ {stars ?? "—"}
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar