import React from "react";
import { motion } from "framer-motion";
import { config } from "../config";
import residentialImg from "../assets/residential_solar.webp";
import commercialImg from "../assets/commercial_solar.webp";
import agriculturalImg from "../assets/agricultural_solar.webp";
import techDetailImg from "../assets/solar_tech_detail.webp";

const articles = [
  {
    title: "Understanding Discom Smart Net-Metering Grid Connectivity Rules",
    date: "June 2026",
    readTime: "5 min read",
    image: residentialImg
  },
  {
    title: "Why Commercial Rooftops Yield Massive ROI and Accelerated Depreciation Benefits",
    date: "May 2026",
    readTime: "7 min read",
    image: commercialImg
  },
  {
    title: "Tata Power vs Waaree Panels: Selecting Modules for Hot Weather Climates",
    date: "April 2026",
    readTime: "6 min read",
    image: techDetailImg
  },
  {
    title: "The Step-by-Step Rooftop Solar Fitting and Inverter Wiring Process Guide",
    date: "March 2026",
    readTime: "4 min read",
    image: agriculturalImg
  }
];

export default function Journal() {
  const handleRedirect = (title) => {
    window.open(config.whatsappLink(`Journal: ${title}`), "_blank");
  };

  return (
    <section id="journal" className="bg-transparent py-16 md:py-24 border-t border-gray-200/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-[0.3em] font-body">Solar Insights</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-black font-normal mb-4">
              Recent <span className="italic text-amber-500">thoughts</span>
            </h2>
            
            <p className="text-gray-400 text-sm max-w-md font-medium leading-relaxed font-body">
              Guides, case studies, and engineering updates from our 25 years of local experience.
            </p>
          </div>

          <button 
            onClick={() => handleRedirect("All Journal Articles")}
            className="hidden md:inline-flex items-center gap-2 rounded-full text-xs font-semibold px-6 py-3 border border-gray-200 hover:border-amber-500 hover:text-amber-500 hover:scale-105 transition-all duration-300"
          >
            <span>View all thoughts</span>
            <span>↗</span>
          </button>
        </motion.div>

        {/* Horizontal Pills Grid */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleRedirect(article.title)}
              className="flex items-center justify-between gap-4 p-3 md:p-4 rounded-[40px] sm:rounded-full bg-gray-50/50 hover:bg-gray-100/50 border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                {/* Micro Thumbnail */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-black font-semibold text-sm md:text-base tracking-wide truncate pr-4 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                    <span>{article.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Circle */}
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all flex-shrink-0 mr-1 shadow-sm">
                <span className="text-sm font-sans font-bold group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform">↗</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
