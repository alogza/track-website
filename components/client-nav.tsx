// app/client-layout.tsx
"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Nav";

const navContent = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  ar: {
    home: "الرئيسية",
    about: "عنا",
    services: "الخدمات",
    portfolio: "المعرض",
    contact: "التواصل",
  },
};

export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <>
        <Navbar scrollY={scrollY} />
        {children}
      </>
    );
  }
  