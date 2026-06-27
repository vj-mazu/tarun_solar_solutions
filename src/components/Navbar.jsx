import React, { useEffect, useState } from "react";
import { config } from "../config";
import brandLogo from "../assets/brand_logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const sections = ["home", "services", "works", "journal"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(config.whatsappLink("General Inquiry"), "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-clr-warm-white/85 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-clr-gold/15" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo - Image & Text Monogram */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img 
            src={brandLogo} 
            alt="Tarun Solar Rooftop Logo" 
            className="h-10 w-auto object-contain rounded-lg" 
          />
          <div className="flex flex-col leading-none">
            <span 
              className={`font-display font-bold text-xl tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? "text-clr-charcoal" : "text-white"
              }`}
            >
              TARUN
            </span>
            <span className="font-accent text-[8px] text-clr-gold tracking-[0.3em] uppercase mt-0.5">
              SOLAR ROOFTOP
            </span>
          </div>
        </div>

        {/* Nav Links - Vibhuti style horizontal track */}
        <div className="hidden md:flex items-center gap-9">
          {[
            { id: "home", label: "Home" },
            { id: "services", label: "Services" },
            { id: "works", label: "Works" },
            { id: "journal", label: "Journal" }
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-xs font-semibold uppercase tracking-wider py-1 transition-colors duration-300 ${
                  isActive
                    ? (isScrolled ? "text-clr-olive" : "text-white")
                    : (isScrolled ? "text-clr-text-light hover:text-clr-olive" : "text-white/80 hover:text-white")
                }`}
              >
                {link.label}
                {/* Underline line animation match */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-clr-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* CTA Actions matching Vibhuti design */}
        <div className="flex items-center gap-4">
          {/* Socials / Links actions */}
          <a 
            href="mailto:hello@tarunsolarsolutions.com" 
            className={`hidden lg:flex w-9 h-9 rounded-full items-center justify-center transition-transform hover:scale-105 ${
              isScrolled ? "bg-clr-olive text-white" : "bg-white/10 text-white"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* Consultation Button - with call to action phone number directly embedded */}
          <button
            onClick={handleWhatsAppRedirect}
            className="text-[10px] sm:text-xs rounded-full px-5 py-2.5 font-bold uppercase tracking-wider transition-all duration-300 bg-clr-olive text-white hover:bg-clr-olive-dark hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
          >
            Call 7022673119
          </button>
        </div>

      </div>
    </nav>
  );
}
