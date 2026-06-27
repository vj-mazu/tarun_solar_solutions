import React from "react";
import { Zap, Sun, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";
import { config } from "../config";
import tataLogo from "../assets/tata_logo.png";
import waareeLogo from "../assets/waaree_logo.png";

const services = [
  {
    num: "01",
    icon: Sun,
    title: "Residential Solar System",
    desc: "Power your home with clean solar energy and enjoy decades of stress-free savings. We manage the entire process from structural analysis to final net-metering setup.",
    bullets: [
      "25-Year panel warranty, engineered for peace of mind",
      "Easy financing options with EMI partners",
      "Lower electricity bills from day one",
      "Over 2 Lakh+ satisfied solar homes across India"
    ]
  },
  {
    num: "02",
    icon: Zap,
    title: "Commercial & Industrial",
    desc: "Scale your business utility operations with massive tax write-offs and rapid payback. Commercial arrays yield stable power, protection against rising tariffs, and a 3-5 year investment payback.",
    bullets: [
      "Accelerated depreciation benefits for corporate assets",
      "Zero residential limits - high capacity module fittings",
      "Authorized Tata Power and Waaree panel designs",
      "Comprehensive site engineering and structural load audits"
    ]
  },
  {
    num: "03",
    icon: Settings,
    title: "Smart Grid Net-Metering",
    desc: "Capture sunlight, convert it to electricity with a solar inverter, power your home during the day, and send extra power back to the grid for credits.",
    bullets: [
      "Bidirectional smart grid meter coordination",
      "Anti-islanding DISCOM safety standards compliance",
      "DISCOM registration paper approvals managed end-to-end",
      "Credits directly offset on your utility bills"
    ]
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Support & Maintenance",
    desc: "India's leading solar rooftop setup backed by authorized service partners. We ensure your panel arrays produce at peak capacity year-after-year with advanced wash and health diagnostics.",
    bullets: [
      "Pressurized cleaning cycles for dust removal",
      "Inverter diagnostic test & wiring insulation checks",
      "Thermal scans to detect panel hotspots",
      "225+ Authorized service partners nationwide"
    ]
  }
];

export default function Services() {
  const handleWhatsAppInquiry = (service) => {
    window.open(config.whatsappLink(`Services: ${service}`), "_blank");
  };

  return (
    <section id="services" className="bg-[#1A1A1A] py-24 md:py-32 overflow-hidden relative select-none">
      
      {/* Decorative background glow matching Vibhuti Interiors dark section style */}
      <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-clr-olive/10 to-transparent filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header - Vibhuti Style */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-accent text-lg text-clr-gold tracking-[0.3em] uppercase block mb-3">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl text-clr-cream font-bold leading-tight">
            Our Expert Solar<br />
            <span className="italic text-clr-sage">Fitting Services</span>
          </h2>
        </div>

        {/* Services Grid matching Vibhuti design card rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="service-card p-10 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 relative overflow-hidden group"
              >
                {/* Horizontal line hover expand */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-clr-gold to-clr-olive scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                
                {/* Big background service number */}
                <span className="font-display text-[4rem] font-bold text-white/[0.03] group-hover:text-white/[0.06] absolute top-4 right-6 leading-none transition-colors duration-500">
                  {service.num}
                </span>

                {/* Service Icon */}
                <div className="text-clr-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-10 h-10 stroke-[1.2]" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-clr-cream mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-clr-gold-light/70 text-xs md:text-sm leading-relaxed mb-6 font-body">
                  {service.desc}
                </p>

                {/* Checklists */}
                <ul className="space-y-2.5 mb-8 border-t border-white/[0.05] pt-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-white/60 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clr-olive flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp button */}
                <button
                  onClick={() => handleWhatsAppInquiry(service.title)}
                  className="text-[10px] font-bold uppercase tracking-widest text-clr-gold hover:text-white transition-colors duration-300"
                >
                  Inquire Package ↗
                </button>
              </div>
            );
          })}
        </div>

        {/* Partners Showcase Plaques */}
        <div className="pt-16 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left select-text max-w-sm">
            <span className="font-accent text-xs text-clr-gold tracking-widest uppercase mb-1 block">Corporate Logistics</span>
            <h4 className="text-xl md:text-2xl font-display italic text-clr-cream leading-tight">Tata Power Solar & Waaree Authorized Partners</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Tata Plaque */}
            <div className="flex items-center justify-between gap-6 bg-white/[0.02] border border-white/[0.05] px-6 py-4 rounded-[20px] shadow-sm hover:border-clr-gold/20 hover:scale-102 transition-all duration-300 w-[290px] h-[90px]">
              <img src={tataLogo} alt="Tata Power Solar" className="h-11 w-auto object-contain rounded-md" />
              <div className="text-right font-body flex-1 pl-4 border-l border-white/[0.05]">
                <span className="text-[8px] font-bold text-clr-gold uppercase tracking-wider block leading-none mb-0.5">Authorized</span>
                <span className="text-white font-extrabold text-xs block leading-tight">TATA POWER</span>
                <span className="text-white/40 text-[8px] font-bold block uppercase tracking-widest">SOLAROOF</span>
              </div>
            </div>

            {/* Waaree Plaque */}
            <div className="flex items-center justify-between gap-6 bg-white/[0.02] border border-white/[0.05] px-6 py-4 rounded-[20px] shadow-sm hover:border-clr-gold/20 hover:scale-102 transition-all duration-300 w-[290px] h-[90px]">
              <img src={waareeLogo} alt="Waaree Solar" className="h-11 w-auto object-contain rounded-md animate-glow" />
              <div className="text-right font-body flex-1 pl-4 border-l border-white/[0.05]">
                <span className="text-[8px] font-bold text-clr-gold uppercase tracking-wider block leading-none mb-0.5">Elite Partner</span>
                <span className="text-[#5d9cec] font-black text-xs block leading-tight">WAAREE</span>
                <span className="text-white/40 text-[8px] font-semibold tracking-wider block uppercase">ONE WITH SUN</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
