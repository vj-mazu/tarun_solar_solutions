import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { config } from "../config";
import brandLogo from "../assets/brand_logo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

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
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-clr-warm-white/85 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-clr-gold/15" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between relative">
        
        {/* Brand Logo - Image Monogram with rendering details to prevent heavy paint delays */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          role="button"
          tabIndex={0}
          aria-label="Go to top of page"
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img 
            src={brandLogo} 
            alt="Tarun Solar Rooftop Logo" 
            className="h-14 md:h-18 w-auto object-contain rounded-lg" 
            width="72"
            height="72"
            fetchpriority="high"
            loading="eager"
          />
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
        <div className="flex items-center gap-3">
          {/* Socials / Links actions */}
          <a 
            href="mailto:hello@tarunsolarsolutions.com" 
            aria-label="Email Tarun Solar Rooftop"
            className={`hidden lg:flex w-9 h-9 rounded-full items-center justify-center transition-transform hover:scale-105 ${
              isScrolled ? "bg-clr-olive text-white" : "bg-white/10 text-white"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* Consultation Button - hidden on small mobile viewports to prevent hamburger overlap */}
          <button
            onClick={handleWhatsAppRedirect}
            aria-label="Call or message Tarun Solar Rooftop"
            className="hidden sm:inline-block text-[10px] md:text-xs rounded-full px-5 py-2.5 font-bold uppercase tracking-wider transition-all duration-300 bg-clr-olive text-white hover:bg-clr-olive-dark hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
          >
            Call 7022673119
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-all cursor-pointer ${
              isScrolled 
                ? "border-clr-gold/20 text-clr-charcoal bg-black/5" 
                : "border-white/20 text-white bg-white/5"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile navigation drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-clr-warm-white border-b border-clr-gold/15 py-6 px-6 flex flex-col gap-4 shadow-xl md:hidden z-40"
          >
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "works", label: "Works" },
              { id: "journal", label: "Journal" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-xs font-bold uppercase tracking-widest py-3 border-b border-gray-100 last:border-0 ${
                  activeSection === link.id ? "text-clr-olive font-extrabold" : "text-clr-charcoal"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppRedirect();
              }}
              className="w-full mt-2 text-center rounded-full py-3 bg-clr-olive hover:bg-clr-olive-dark text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Call 7022673119
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
