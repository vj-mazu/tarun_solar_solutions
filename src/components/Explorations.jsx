import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";

import residentialImg from "../assets/residential_solar.png";
import commercialImg from "../assets/commercial_solar.png";
import agriculturalImg from "../assets/agricultural_solar.png";
import techDetailImg from "../assets/solar_tech_detail.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { image: residentialImg, title: "Modern Rooftop Integration", rotation: "-4deg" },
  { image: commercialImg, title: "100kW Industrial Power Array", rotation: "3deg" },
  { image: agriculturalImg, title: "Irrigation Station Installation", rotation: "-2deg" },
  { image: techDetailImg, title: "Close-up Monocrystalline", rotation: "5deg" },
  { image: residentialImg, title: "Tata Power Grid Metering Install", rotation: "-3deg" },
  { image: commercialImg, title: "Waaree Elite Module System", rotation: "4deg" }
];

export default function Explorations() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  useEffect(() => {
    const pinEl = pinRef.current;
    const containerEl = containerRef.current;
    if (!pinEl || !containerEl) return;

    // Pin the left heading panel
    const pinTrigger = ScrollTrigger.create({
      trigger: containerEl,
      start: "top top",
      end: "bottom bottom",
      pin: pinEl,
      pinSpacing: false
    });

    // Parallax movement for column 1
    let tl1 = null;
    if (col1Ref.current) {
      tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
      tl1.to(col1Ref.current, { y: -150, ease: "none" });
    }

    // Parallax movement for column 2
    let tl2 = null;
    if (col2Ref.current) {
      tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
      tl2.to(col2Ref.current, { y: -300, ease: "none" });
    }

    return () => {
      pinTrigger.kill();
      if (tl1) tl1.scrollTrigger?.kill();
      if (tl2) tl2.scrollTrigger?.kill();
    };
  }, []);

  const handleOpenLightbox = (image, title) => {
    setLightboxImage(image);
    setLightboxTitle(title);
  };

  const handleWhatsAppRedirect = () => {
    window.open(config.whatsappLink("Explorations Gallery Inquiry"), "_blank");
  };

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-[220vh] md:min-h-[300vh] bg-transparent border-t border-gray-200/50 flex flex-col md:flex-row select-none"
    >
      {/* Column 1: Pinned content */}
      <div className="w-full md:w-1/2 relative h-screen md:h-auto" ref={pinRef}>
        <div className="md:sticky md:top-0 h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.3em] font-body">Explorations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-black font-normal mb-6">
            Visual <span className="italic text-amber-500">playground</span>
          </h2>
          
          <p className="text-gray-400 text-sm max-w-sm mb-8 font-medium leading-relaxed font-body">
            Raw, unfiltered looks at solar projects in the Indian field. Click on any card to view the close-up installation detailing.
          </p>

          <button 
            onClick={handleWhatsAppRedirect}
            className="inline-flex self-start items-center gap-2 rounded-full text-xs font-semibold px-6 py-3 bg-black hover:bg-amber-500 text-white hover:text-black transition-all duration-300 shadow-sm"
          >
            <span>Inquire on WhatsApp</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* Column 2: Parallax Cards Gallery */}
      <div className="w-full md:w-1/2 flex justify-center px-4 md:px-8 py-20 relative">
        <div className="grid grid-cols-2 gap-6 md:gap-16 max-w-[640px] w-full">
          
          {/* Column 1 (Left Cards) */}
          <div ref={col1Ref} className="flex flex-col gap-10 md:gap-20 translate-y-10">
            {galleryItems.filter((_, i) => i % 2 === 0).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(item.image, item.title)}
                className="aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl cursor-pointer group transition-all duration-500"
                style={{ transform: `rotate(${item.rotation})` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>

          {/* Column 2 (Right Cards) */}
          <div ref={col2Ref} className="flex flex-col gap-10 md:gap-20">
            {galleryItems.filter((_, i) => i % 2 !== 0).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenLightbox(item.image, item.title)}
                className="aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl cursor-pointer group transition-all duration-500"
                style={{ transform: `rotate(${item.rotation})` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center select-none" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              CLOSE ✕
            </button>
            <div className="w-full h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-6 bg-black">
              <img 
                src={lightboxImage} 
                alt={lightboxTitle} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl md:text-2xl font-display italic font-semibold text-white text-center">
                {lightboxTitle}
              </h3>
              <button
                onClick={() => {
                  window.open(config.whatsappLink(`Gallery Inquiry: ${lightboxTitle}`), "_blank");
                }}
                className="rounded-full px-6 py-2.5 bg-clr-olive hover:bg-clr-olive-dark text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire on WhatsApp ↗
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
