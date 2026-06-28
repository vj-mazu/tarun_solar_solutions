import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import brandLogo from "../assets/brand_logo.webp";

const word1 = "TARUN".split("");
const word2 = "SOLAR".split("");
const word3 = "ROOFTOP".split("");

export default function LoadingScreen({ onComplete }) {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartExit(true);
      setTimeout(() => {
        onComplete();
      }, 900);
    }, 2800);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  // Framer Motion Letter Variants
  const letterVariants = {
    initial: { y: 60, rotateX: 90, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.05 + 0.3 // Delay to let logo show first
      }
    })
  };

  // Horizontal Line variants
  const lineVariants = {
    initial: { width: "0px" },
    animate: {
      width: "120px",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 1, scale: 1 }}
      animate={startExit ? { opacity: 0, scale: 1.05, pointerEvents: "none" } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 w-screen h-screen bg-clr-dark flex flex-col justify-center items-center z-[9999] select-none"
    >
      {/* Cinematic Content Block */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        
        <motion.img 
          src={brandLogo} 
          alt="Tarun Solar Rooftop Logo" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="h-56 md:h-64 w-auto object-contain rounded-[24px] mb-8 border border-white/15 bg-black/95 px-2 py-2 shadow-2xl"
        />

        {/* Top Horizontal Line (Vibhuti style) */}
        <motion.div 
          variants={lineVariants}
          initial="initial"
          animate="animate"
          className="h-[1.5px] bg-clr-gold"
        />

        {/* Title Word 1 (TARUN) */}
        <div className="flex justify-center gap-1 mt-6 overflow-hidden py-1">
          {word1.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={index}
              className="text-clr-cream text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-[0.25em] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Title Word 2 (SOLAR) */}
        <div className="flex justify-center gap-1 overflow-hidden py-1">
          {word2.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={index + word1.length}
              className="text-clr-gold text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-[0.25em] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Tagline word-by-word reveal */}
        <div className="flex justify-center gap-1 mt-4 mb-6 overflow-hidden h-6 py-0.5">
          {word3.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { y: 20, opacity: 0 },
                animate: (custom) => ({
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: custom * 0.05 + 0.9
                  }
                })
              }}
              initial="initial"
              animate="animate"
              custom={index}
              className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Bottom Horizontal Line */}
        <motion.div 
          variants={lineVariants}
          initial="initial"
          animate="animate"
          className="h-[1.5px] bg-clr-gold"
        />

      </div>
    </motion.div>
  );
}
