"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm h-14"
          : "bg-white h-16"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo34.png"
            alt="Yıldırım Yazılım ve Teknoloji"
            width={140}
            height={40}
            priority
            className="h-45 w-auto object-contain"
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-800">
          <a href="#projects" className="hover:text-black transition">
            Projeler
          </a>

          <a href="#about" className="hover:text-black transition">
            Yaklaşımımız
          </a>

          <a href="#services" className="hover:text-black transition">
            Çözümler
          </a>

          <Link
            href="/contact"
            className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition"
          >
            İletişime Geç
          </Link>
        </nav>
      </div>
    </header>
  );
}
