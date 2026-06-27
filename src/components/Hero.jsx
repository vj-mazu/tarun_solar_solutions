import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "../config";

import carousel1 from "../assets/hero_carousel_1.png";
import carousel2 from "../assets/hero_carousel_2.png";
import carousel3 from "../assets/hero_carousel_3.png";
import carousel4 from "../assets/hero_carousel_4.png";

const carouselImages = [carousel1, carousel2, carousel3, carousel4];
const roles = ["Residential", "Commercial", "Industrial", "Micro-Grid"];

export default function Hero() {
  const containerRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Role cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Image Carousel cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.15 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(8px)", y: 15 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.7"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppRedirect = (service) => {
    window.open(config.whatsappLink(service), "_blank");
  };

  return (
    <div 
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black select-none"
    >
      {/* Background HD Image Carousel - 100% clean raw quality with no white color patches */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={imageIndex}
            src={carouselImages[imageIndex]}
            alt="Tarun Solar Solutions Fittings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Hero Content Area - aligned with comfortable top margin to prevent overlapping the header brand */}
      <div className="relative z-10 max-w-4xl px-8 md:px-16 lg:px-24 text-left flex flex-col items-start justify-center pt-28 md:pt-36 pb-16">
        
        {/* Eyebrow badge */}
        <span 
          className="blur-in block text-[11px] font-bold text-clr-gold uppercase tracking-[0.3em] mb-4 font-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
        >
          Tata Power & Waaree Solar Partners
        </span>

        {/* Headline styled with white color and dropshadow to ensure absolute visibility over raw images */}
        <h1 
          className="name-reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[1.15] text-white pb-3 mb-6 font-bold select-text drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          Tarun Solar<br />
          <span className="italic text-clr-gold">Rooftop</span>
        </h1>

        {/* Dynamic Role Line */}
        <div className="blur-in text-base md:text-lg text-white/95 font-semibold tracking-wider mb-6 font-body drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          A premium{" "}
          <span 
            key={roleIndex}
            className="font-display italic text-clr-gold font-bold animate-role-fade-in inline-block border-b border-clr-gold/45"
          >
            {roles[roleIndex]}
          </span>{" "}
          fitting specialist in India.
        </div>

        {/* Description */}
        <p 
          className="blur-in text-xs md:text-sm text-white/85 max-w-lg mb-10 leading-relaxed font-body select-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          Delivering absolute grid autonomy and high-performance clean energy installations. Authorized components backed by 25-year structural warranties.
        </p>

        {/* Action Buttons */}
        <div className="blur-in flex flex-wrap gap-4">
          <button 
            onClick={() => handleWhatsAppRedirect("Residential Fitting Inquiry")}
            className="btn btn-primary bg-clr-olive text-white border-2 border-clr-olive rounded-full text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-clr-olive-dark hover:border-clr-olive-dark hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
          >
            Residential Fitting
          </button>
          
          <button 
            onClick={() => handleWhatsAppRedirect("Commercial Site Audit")}
            className="btn btn-outline bg-transparent text-white border-2 border-white/40 rounded-full text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-clr-charcoal hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer"
          >
            Commercial Audit
          </button>
        </div>

        <div className="blur-in mt-6 text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          Direct support: <a href="tel:+917022673119" className="text-clr-gold hover:underline transition-all select-all font-body tracking-wider">+91 70226 73119</a>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none z-10">
        <div className="scroll-line w-[1px] h-[50px] bg-gradient-to-b from-clr-gold to-transparent animate-pulse" />
        <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] font-body">Scroll</span>
      </div>

    </div>
  );
}
