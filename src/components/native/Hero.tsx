import React from "react";
import smanga from "@/assets/images/smanga.png";
import { MdOutlineArrowDownward } from "react-icons/md";
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-712.jpg?w=740&t=st=1703120770~exp=1703121370~hmac=144923de9ee27358d0a14ea9e2eb5cb98a7d59c7b07ad02b32b3ad4d41d3ff5d')`,
      }}
      className="h-[600px]  lg:-mt-20 p-8 px-4 lg:p-40 lg:px-20 bg-no-repeat bg-center bg-cover w-full"
    >
      <div className="space-y-20 w-full  lg:w-9/12 ">
        <div className="space-y-4 p-6   bg-white/60">
          <p className="lg:text-4xl font-bold font-bevand">
            Providing Meaningful Contruction Services
          </p>
          <p className="lg:w-2/3 text-sm lg:text-md">
            Experience construction with a purpose at Smanga the Builder. Our
            services go beyond the ordinary, focusing on creating meaningful
            spaces that resonate with quality and purpose. From meticulous
            craftsmanship to thoughtful design, we're dedicated to transforming
            visions into enduring realities.
          </p>
        </div>
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="py-3 w-40 px-4 inline-flex items-center gap-x-2 text-sm font-semibold  border border-transparent bg-yellow-500 text-white hovers:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          All Services{" "}
          <span>
            <MdOutlineArrowDownward className="text-xl animate-bounce -mb-3" />
          </span>
        </button>
      </div>
      <img
        src={smanga.src}
        className=" lg:-mt-72 lg:-mr-20 ml-auto h-[500px]"
      />
    </div>
  );
}
