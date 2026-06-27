import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { config } from "../config";
import brandLogo from "../assets/brand_logo.png";

export default function Footer() {
  const marqueeRef = useRef(null);
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  // GSAP Marquee Animation
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const firstChild = marquee.children[0];
    if (firstChild) {
      const clone = firstChild.cloneNode(true);
      marquee.appendChild(clone);
    }

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open(config.whatsappLink("Footer Contact"), "_blank");
  };

  return (
    <footer 
      id="contact"
      className="relative w-full pt-20 pb-12 overflow-hidden bg-clr-dark select-none border-t border-white/10"
    >
      {/* Decorative background glow matching Hero/Services dark layout style */}
      <div className="absolute inset-0 bg-gradient-to-br from-clr-dark via-clr-dark to-clr-olive/10 pointer-events-none" />

      {/* Infinite GSAP Marquee (Z-10 to render clearly) */}
      <div className="w-full overflow-hidden border-y border-white/10 py-6 mb-16 relative z-10">
        <div ref={marqueeRef} className="flex whitespace-nowrap w-max">
          <div className="text-3xl md:text-5xl font-display italic text-white/55 font-normal uppercase tracking-wider inline-block">
            GO SOLAR • SAVE EARTH • TATA & WAAREE TRUSTED PARTNERS • ACCELERATED ROI • GRID CONNECTIVITY • 
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-center text-center">
        
        {/* Brand Logo in Footer */}
        <img 
          src={brandLogo} 
          alt="Tarun Solar Rooftop Logo" 
          className="h-24 w-auto object-contain rounded-2xl mb-6 bg-black/95 px-5 py-3 border border-white/15 shadow-xl"
        />

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-display text-white font-normal mb-8">
          Ready to transition to <span className="italic text-clr-gold">clean power</span>?
        </h2>

        {/* Pulsing Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="relative rounded-full px-10 py-5 font-bold tracking-wide transition-all duration-300 transform hover:scale-105 group cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-clr-gold to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="absolute inset-[1.5px] rounded-full bg-black -z-10 group-hover:bg-white transition-colors duration-300" />
          
          <span className="text-white group-hover:text-black transition-colors duration-300 font-body tracking-wider text-xs md:text-sm">
            hello@tarunsolarsolutions.com ↗
          </span>
        </button>

        {/* Footer Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-20 pt-8 border-t border-white/10">
          
          {/* Social & Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-white/60">
            <a href="https://wa.me/917022673119" target="_blank" rel="noreferrer" className="hover:text-clr-gold transition-colors">WhatsApp</a>
            <a href="#home" className="hover:text-clr-gold transition-colors">LinkedIn</a>
            <button onClick={() => setModalType("privacy")} className="hover:text-clr-gold transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => setModalType("terms")} className="hover:text-clr-gold transition-colors cursor-pointer">Terms of Service</button>
          </div>

          {/* Availability Pulse Indicator */}
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/10 rounded-full px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider font-body">
              Active Installations in India
            </span>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 text-[10px] text-white/40 tracking-wider font-body">
          &copy; {new Date().getFullYear()} Tarun Solar Rooftop. All rights reserved. Authorized Tata Power & Waaree Solar System Fitters.
        </div>

      </div>

      {/* Legal Dialog Modals (Privacy / Terms) */}
      <AnimatePresence>
        {modalType && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setModalType(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white max-w-xl w-full rounded-[28px] p-8 md:p-10 shadow-2xl relative z-10 border border-clr-gold/15 text-left select-text max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setModalType(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-black cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {modalType === "privacy" ? (
                <div>
                  <span className="font-accent text-sm text-clr-gold tracking-widest uppercase block mb-1">Compliance</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-clr-charcoal mb-6">Privacy Policy</h3>
                  <div className="space-y-4 text-xs md:text-sm text-clr-text-light font-body leading-relaxed">
                    <p>
                      At Tarun Solar Rooftop, we respect your privacy. This policy outlines how we collect, handle, and secure information during feasibility audits, grid registrations, and WhatsApp inquiries.
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">1. Information We Collect</h4>
                    <p>
                      We collect name, phone, solar capacity interest, and location coordinate details strictly to complete net-metering synchronization with state DISCOM partners.
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">2. Data Security</h4>
                    <p>
                      Your data is synced securely inside local servers and draft messages. We never distribute corporate client registries to third-party marketing companies.
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">3. Government Schemes</h4>
                    <p>
                      In submitting applications under the PM Surya Ghar Muft Bijli Yojana, selected operational details are shared securely with authorized state grid officers.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="font-accent text-sm text-clr-gold tracking-widest uppercase block mb-1">Guidelines</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-clr-charcoal mb-6">Terms of Service</h3>
                  <div className="space-y-4 text-xs md:text-sm text-clr-text-light font-body leading-relaxed">
                    <p>
                      Welcome to Tarun Solar Rooftop. By reserving a slot or contracting solar fitting operations, you agree to these legal conditions:
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">1. Project Feasibility</h4>
                    <p>
                      Site bookings are subject to physical roof load evaluations. Standard structures support monocrystalline arrays, but custom sub-structures require secondary engineering verification.
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">2. Net-Metering Approvals</h4>
                    <p>
                      Grid connectivity and credit offset speeds depend on local DISCOM inspector processing limits. We coordinate all registration filings, but timeline control rests with utilities.
                    </p>
                    <h4 className="font-bold text-clr-charcoal mt-4 uppercase text-[10px] tracking-wider">3. Warranty Limits</h4>
                    <p>
                      Tata Power and Waaree panel warranties (25 years) are backed directly by the manufacturers. Inverter warranties (typically 5-10 years) cover electrical components under regular grid parameters.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setModalType(null)}
                className="w-full mt-8 rounded-full py-3 bg-clr-charcoal text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Agreement
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
