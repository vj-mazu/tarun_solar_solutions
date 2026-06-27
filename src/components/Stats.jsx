import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "25",
    suffix: "Yr",
    label: "Panel Warranty",
    desc: "Guaranteed efficiency on Tata & Waaree modules."
  },
  {
    value: "950",
    suffix: "+",
    label: "Fittings Done",
    desc: "Installations across corporate & residential sites."
  },
  {
    value: "100",
    suffix: "%",
    label: "Grid Synchronization",
    desc: "End-to-end net-metering DISCOM approval."
  },
  {
    value: "10",
    suffix: "+",
    label: "EMI Partners",
    desc: "Instant zero-down financing options."
  }
];

export default function Stats() {
  return (
    <section className="bg-clr-olive py-20 relative overflow-hidden select-none">
      
      {/* Decorative SVG grid matching Vibhuti stats section */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[1px] md:after:h-[50px] md:after:bg-white/15 last:after:hidden"
            >
              <div className="flex items-baseline justify-center select-text">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-clr-gold-light ml-0.5">
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-xs font-bold text-white/90 uppercase tracking-widest mt-4 mb-2 font-body">
                {stat.label}
              </h3>
              <p className="text-[10px] text-white/60 font-medium font-body leading-relaxed max-w-[180px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
