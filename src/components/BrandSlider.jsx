import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import tataLogo from "../assets/tata_logo.png";
import waareeLogo from "../assets/waaree_logo.png";

export default function BrandSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Duplicate children to create a seamless infinite scroll loop
    const firstChild = slider.children[0];
    if (firstChild) {
      const clone = firstChild.cloneNode(true);
      slider.appendChild(clone);
    }

    const tween = gsap.to(slider, {
      xPercent: -50,
      duration: 18,
      ease: "none",
      repeat: -1
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="bg-transparent py-16 border-y border-gray-100/80 overflow-hidden select-none relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10 w-full h-full" />
      
      <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-clr-gold uppercase tracking-[0.3em] block mb-1 font-body">Authorized Fitting</span>
          <h4 className="text-2xl font-display font-normal text-black italic">Industry Leading Partners</h4>
        </div>
        <p className="text-xs text-gray-400 font-medium max-w-sm md:text-right font-body leading-relaxed">
          Installing authentic components directly sourced from India's most trusted solar brands.
        </p>
      </div>

      {/* Infinite Logo Slider - ENLARGED CARDS AND IMAGES */}
      <div className="w-full overflow-hidden relative py-4">
        <div ref={sliderRef} className="flex whitespace-nowrap w-max gap-12 items-center">
          <div className="flex gap-14 items-center px-6">
            
            {/* Tata Power Logo Card */}
            <div className="flex items-center justify-between gap-8 bg-white border border-gray-100/90 p-8 rounded-[28px] w-[420px] h-[130px] shadow-sm hover:shadow-md hover:border-clr-gold/30 hover:scale-102 transition-all duration-300">
              <img src={tataLogo} alt="Tata Power Solar" className="h-20 w-auto max-w-[150px] object-contain rounded-md" />
              <div className="text-right font-body flex-1 pl-6 border-l border-gray-100">
                <span className="text-[10px] font-extrabold text-clr-gold uppercase tracking-widest block mb-0.5">Authorized</span>
                <span className="text-black font-black text-sm block leading-tight">TATA POWER</span>
                <span className="text-gray-400 text-[8px] font-bold block uppercase tracking-widest mt-0.5">SOLAROOF</span>
              </div>
            </div>

            {/* Waaree Logo Card */}
            <div className="flex items-center justify-between gap-8 bg-white border border-gray-100/90 p-8 rounded-[28px] w-[420px] h-[130px] shadow-sm hover:shadow-md hover:border-clr-gold/30 hover:scale-102 transition-all duration-300">
              <img src={waareeLogo} alt="Waaree Solar" className="h-20 w-auto max-w-[170px] object-contain rounded-md" />
              <div className="text-right font-body flex-1 pl-6 border-l border-gray-100">
                <span className="text-[10px] font-extrabold text-clr-gold uppercase tracking-widest block mb-0.5">Elite Partner</span>
                <span className="text-[#0f529f] font-black text-sm block leading-tight">WAAREE</span>
                <span className="text-gray-400 text-[8px] font-bold block uppercase tracking-widest mt-0.5">ONE WITH THE SUN</span>
              </div>
            </div>

            {/* Tata Power Logo Card (Repeated) */}
            <div className="flex items-center justify-between gap-8 bg-white border border-gray-100/90 p-8 rounded-[28px] w-[420px] h-[130px] shadow-sm hover:shadow-md hover:border-clr-gold/30 hover:scale-102 transition-all duration-300">
              <img src={tataLogo} alt="Tata Power Solar" className="h-20 w-auto max-w-[150px] object-contain rounded-md" />
              <div className="text-right font-body flex-1 pl-6 border-l border-gray-100">
                <span className="text-[10px] font-extrabold text-clr-gold uppercase tracking-widest block mb-0.5">Official Partner</span>
                <span className="text-black font-black text-sm block leading-tight">TATA POWER</span>
                <span className="text-gray-400 text-[8px] font-bold block uppercase tracking-widest mt-0.5">SOLAROOF</span>
              </div>
            </div>

            {/* Waaree Logo Card (Repeated) */}
            <div className="flex items-center justify-between gap-8 bg-white border border-gray-100/90 p-8 rounded-[28px] w-[420px] h-[130px] shadow-sm hover:shadow-md hover:border-clr-gold/30 hover:scale-102 transition-all duration-300">
              <img src={waareeLogo} alt="Waaree Solar" className="h-20 w-auto max-w-[170px] object-contain rounded-md" />
              <div className="text-right font-body flex-1 pl-6 border-l border-gray-100">
                <span className="text-[10px] font-extrabold text-clr-gold uppercase tracking-widest block mb-0.5">Elite Partner</span>
                <span className="text-[#0f529f] font-black text-sm block leading-tight">WAAREE</span>
                <span className="text-gray-400 text-[8px] font-bold block uppercase tracking-widest mt-0.5">ONE WITH THE SUN</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
