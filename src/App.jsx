import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandSlider from "./components/BrandSlider";
import Services from "./components/Services";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [isLoading, setIsLoading] = useState(!prefersReducedMotion);

  return (
    <div className="relative min-h-screen bg-clr-warm-white text-clr-charcoal overflow-x-hidden selection:bg-clr-cream-dark selection:text-black">
      {/* AnimatePresence manages the exit animation of LoadingScreen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main site container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {/* Fixed pill navigation bar */}
        <Navbar />

        {/* Hero Section with local mp4 Background */}
        <Hero />

        {/* Brand Slider Partner logos */}
        <BrandSlider />

        {/* Solar fitting services tabs */}
        <Services />

        {/* Bento Grid Projects Showcase */}
        <SelectedWorks />

        {/* Horizontal Pills Journal */}
        <Journal />

        {/* Scroll-driven Parallax Gallery */}
        <Explorations />

        {/* Experience Metrics & ROI Statistics */}
        <Stats />

        {/* Site Feasibility Booking Form */}
        <BookingForm />

        {/* Vertically Flipped Video Stream Footer */}
        <Footer />

        <WhatsAppButton />
      </motion.div>
    </div>
  );
}
