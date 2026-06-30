import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { config } from "../config";
import residentialImg from "../assets/residential_solar.webp";
import commercialImg from "../assets/commercial_solar.webp";
import agriculturalImg from "../assets/agricultural_solar.webp";
import techDetailImg from "../assets/solar_tech_detail.webp";

const projects = [
  {
    title: "Residential Roof Fitting",
    subtitle: "Tata Solar 5kW Grid-Tied System",
    image: residentialImg,
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
    desc: "A high-efficiency residential solar infrastructure fitting completed in Karnataka. Engineered utilizing Tata Power Solar Solaroof technology for optimal roof space offset, providing zero-bill energy production with a grid-tied smart net-metering interface."
  },
  {
    title: "Corporate Rooftop Grid",
    subtitle: "Waaree Monocrystalline 120kW Array",
    image: commercialImg,
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto",
    desc: "Large scale commercial utility solar fitting designed for corporate tax write-offs and rapid ROI payback. Features a rugged monocrystalline module array with accelerated tax depreciation certification."
  },
  {
    title: "Solar Water Pumping",
    subtitle: "Agricultural Smart Irrigation Station",
    image: agriculturalImg,
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-auto",
    desc: "Agricultural solar-powered irrigation station tailored for high-efficiency deep-well pumping. Designed with automated solar-to-irrigation regulators to ensure clean water flow for farming."
  },
  {
    title: "High-Efficiency Solar Modules",
    subtitle: "Waaree PERC Half-Cut Cell Fitting",
    image: techDetailImg,
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/10]",
    desc: "Advanced half-cut cells utilizing PERC cell technology for maximal efficiency under high-heat parameters. Fully authorized Waaree solar layout modules verified for 25 years."
  }
];

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleWhatsAppRedirect = (title) => {
    window.open(config.whatsappLink(`Project Inquiry: ${title}`), "_blank");
  };

  return (
    <section id="works" className="bg-transparent py-24 md:py-32 border-t border-clr-gold/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header - Vibhuti Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
        >
          <div>
            <span className="font-accent text-lg text-clr-olive tracking-[0.3em] uppercase block mb-3">Our Projects</span>
            <h2 className="font-display text-4xl md:text-5xl text-clr-charcoal font-bold leading-tight">
              Featured Solar<br />
              <span className="italic text-clr-gold">Installations</span>
            </h2>
          </div>

          <button 
            onClick={() => handleWhatsAppRedirect("All Projects Listing")}
            aria-label="Ask for all solar project examples"
            className="btn btn-outline border border-clr-gold text-clr-charcoal hover:bg-clr-gold hover:text-white rounded-full text-xs font-semibold px-8 py-3.5 transition-all duration-300 self-start cursor-pointer"
          >
            View all projects ↗
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedProject(project);
                }
              }}
              className={`${project.span} ${project.aspect} relative bg-clr-cream-dark border border-clr-gold/10 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end min-h-[220px] md:min-h-[340px]`}
            >
              {/* Top-Right Glowing Partner Tag Badge */}
              <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300 group-hover:bg-black/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clr-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-clr-gold"></span>
                </span>
                <span className="text-[9px] font-bold text-white uppercase tracking-widest font-body">
                  {index % 2 === 0 ? "Tata Power Partner" : "Waaree Elite Partner"}
                </span>
              </div>

              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 group-hover:rotate-[0.5deg] transition-transform duration-[1200ms] ease-out"
                loading="lazy"
                decoding="async"
              />

              {/* Dark Overlay (Ensuring readability underneath the card) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-100" />

              {/* Uniform Glassmorphic bottom info container */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/55 backdrop-blur-md border border-white/10 p-5 rounded-2xl transition-all duration-500 group-hover:bg-clr-olive/90 group-hover:border-clr-gold/30 group-hover:translate-y-[-4px]">
                <span className="font-accent text-clr-gold group-hover:text-white/80 text-xs tracking-wider block mb-1 transition-colors duration-300">
                  {project.subtitle}
                </span>
                <h3 className="font-display text-white text-lg md:text-xl font-bold leading-tight flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="text-clr-gold group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">→</span>
                </h3>
              </div>

              {/* Glow border line on active cards */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-clr-gold/45 rounded-2xl pointer-events-none transition-all duration-500" />

            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Premium Lightbox Component with WhatsApp Inquire Button */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            {/* Close trigger on backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedProject(null)} />

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative bg-clr-warm-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row border border-clr-gold/15"
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2 h-72 md:h-auto min-h-[300px] relative bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  decoding="async"
                />
              </div>

              {/* Details Column */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="font-accent text-sm text-clr-gold tracking-widest uppercase block mb-2">
                    {selectedProject.subtitle}
                  </span>
                  <h3 id="project-dialog-title" className="font-display text-3xl font-bold text-clr-charcoal mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs md:text-sm text-clr-text-light leading-relaxed font-body mb-8">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleWhatsAppRedirect(selectedProject.title)}
                    className="flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-clr-olive text-white hover:bg-clr-olive-dark text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire Package</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full px-6 py-3 border border-clr-gold/20 hover:border-clr-gold text-clr-charcoal text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

              {/* Close Button top-right */}
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
