"use client";
import { routes } from "@/assets/data/data";
import React, { useEffect, useState } from "react";
import logo from "@/assets/brand/logo.png";
export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set scrolling state based on the scroll position
      setScrolling(scrollTop > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`sticky top-0 py-3 lg:px-20 px-4 justify-between lg:flex w-full transition-all ${
        scrolling ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center ">
        <img src={logo.src} className="lg:w-16 w-6" />
        <p
          style={{ fontWeight: 5500 }}
          className=" font-ruthie font lg:text-4xl  "
        >
          Smanga the Builder
        </p>
      </div>
      <div className="lg:flex hidden items-center gap-4">
        {routes?.map((route) => (
          <a
            className="cursor-pointer   capitalize"
            key={route}
            onClick={() => scrollToSection(route)}
            data-to-scrollspy-id={`${route}`}
          >
            {route}
          </a>
        ))}
      </div>
    </div>
  );
}
