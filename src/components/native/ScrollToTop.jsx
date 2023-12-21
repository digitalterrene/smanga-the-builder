"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const scrollToSection = (sectionId) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="flex ml-auto justify-center items-center border-yellow-500  h-[2.875rem] w-[2.875rem] text-sm font-semibold  border bg-white text-yellow-500 hover:bg-yellow-500 hover:text-white shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      <FaArrowUp className="animate-bounce text-2xl -mb-2" />
    </button>
  );
}
