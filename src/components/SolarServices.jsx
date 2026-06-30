import React from "react";
import { Zap, Award, Percent, BadgeAlert, CheckCircle, ShieldCheck, ChevronRight } from "lucide-react";
import { config } from "../config";

export default function SolarServices() {
  const handleWhatsAppRedirect = (service) => {
    window.open(config.whatsappLink(service), "_blank");
  };

  return (
    <section id="platform" className="relative w-full py-20 px-6 max-w-[1440px] mx-auto select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 
            className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-fustat)" }}
          >
            Solar Solutions for Indian Markets
          </h2>
          <p 
            className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Harness cleaner energy and lower your monthly bills. With <strong>{config.experienceYears} Years of Engineering Excellence</strong>, we partner with India's largest manufacturers to deliver top-tier solar setups.
          </p>
        </div>

        {/* Brand Partners Showcase */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20 animate-fade-in-up">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Trusted Installation Partners:</span>
          {config.partners.map((partner, index) => (
            <div 
              key={index}
              onClick={() => handleWhatsAppRedirect(`${partner.name} Partner`)}
              className="glass-panel px-6 py-4 rounded-2xl flex flex-col items-start cursor-pointer hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-schibsted)" }}>{partner.name}</span>
              </div>
              <span className="text-amber-500 text-xs font-semibold uppercase mt-1">{partner.tier}</span>
            </div>
          ))}
        </div>

        {/* Residential and Commercial Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Residential Solar Card */}
          <div className="glass-panel p-8 rounded-[24px] border border-white/5 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            {/* Top Indicator */}
            <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
              <Percent className="w-3.5 h-3.5" />
              <span>Subsidy Approved</span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 fill-amber-500" />
              </div>
              
              <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-fustat)" }}>
                Residential Solar Power
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Save up to 90% on home electricity. Under the PM Surya Ghar Muft Bijli Yojana, eligible homes receive direct government subsidies.
              </p>

              {/* Subsidy Highlight */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
                <span className="text-xs text-emerald-400 uppercase font-bold tracking-wider block mb-1">Residential Subsidy Status</span>
                <p className="text-white text-sm font-semibold">
                  {config.residentialSubsidyRate} Government Subsidy Available
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {config.residentialSubsidyDetails}
                </p>
              </div>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>25 Years Panel Performance Warranty</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Net-Metering & Grid Connection Assistance</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Zero Maintenance with Smart App Tracking</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleWhatsAppRedirect("Residential Solar with Subsidy")}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-amber-500/15"
            >
              <span>Get Subsidy Quote</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Commercial Solar Card */}
          <div className="glass-panel p-8 rounded-[24px] border border-white/5 hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            {/* Top Indicator */}
            <div className="absolute top-0 right-0 bg-gray-800 text-gray-400 text-xs font-semibold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 border-l border-b border-white/5">
              <BadgeAlert className="w-3.5 h-3.5" />
              <span>No Subsidy</span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              
              <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-fustat)" }}>
                Commercial & Industrial Solar
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Scale your manufacturing facility, corporate office, or school to solar power. Cut operational expenses significantly.
              </p>

              {/* No Subsidy / ROI Detail */}
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 mb-6">
                <span className="text-xs text-amber-400 uppercase font-bold tracking-wider block mb-1">Corporate Tax Benefit status</span>
                <p className="text-white text-sm font-semibold">
                  100% Tax Depreciation & Accelerated Savings
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {config.commercialDetails}
                </p>
              </div>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Authorized Tata Power & Waaree Panels</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Accelerated ROI within 4-5 Years</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Custom engineering, structure & soil analysis</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleWhatsAppRedirect("Commercial Solar Installation")}
              className="w-full bg-white hover:bg-amber-500 hover:text-black text-white bg-transparent border border-white/20 hover:border-transparent font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Request Site Audit</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
