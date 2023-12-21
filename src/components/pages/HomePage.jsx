"use client";
import { routes } from "@/assets/data/data";
import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import AboutPage from "./AboutPage";
import SevicesPage from "./SevicesPage";
import GalleryPage from "./GalleryPage";
import ContactPage from "./ContactPage";
import Hero from "../native/Hero";

export default function HomePage() {
  return (
    <>
      <ScrollSpy updateHistoryStack={false}>
        {routes?.map((route, index) => {
          switch (route) {
            case "home":
              return (
                <div id="home" className="h-fit">
                  <Hero />
                </div>
              );
            case "about":
              return (
                <div id="about" className="h-fit">
                  <AboutPage />
                </div>
              );
            case "services":
              return (
                <div id="services" className="h-fit">
                  <SevicesPage />
                </div>
              );
            case "gallery":
              return (
                <div id="gallery" className="h-fit">
                  <GalleryPage />
                </div>
              );

            case "clients":
              return (
                <div id="clients" className="h-fit">
                  Clients
                </div>
              );
            case "contact":
              return (
                <div id="contact" className="h-fit">
                  <ContactPage />
                </div>
              );
            default:
              return (
                <div id="home" className="h-fit">
                  Home
                </div>
              );
          }
        })}
      </ScrollSpy>
    </>
  );
}
