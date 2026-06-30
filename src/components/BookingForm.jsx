import React, { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare, Send, CheckCircle2, X, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Residential Solar",
    date: "",
    time: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockId = `TSS-B-${Math.floor(100000 + Math.random() * 900000)}`;
    const currentBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: mockId,
      ...formData,
      timestamp: new Date().toISOString()
    };
    currentBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(currentBookings));
    
    setBookingId(mockId);
    setShowSuccess(true);

    const msg = `Booking Details from Website:
----------------------------------
Booking ID: ${mockId}
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/917022673119?text=${encodeURIComponent(msg)}`;

    window.open(whatsappUrl, "_blank");

    // Clear form inputs
    setFormData({
      name: "",
      phone: "",
      service: "Residential Solar",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <section id="booking" className="py-24 bg-transparent border-t border-clr-gold/10 select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="font-accent text-lg text-clr-olive tracking-[0.3em] uppercase block mb-3">Schedule Site Visit</span>
            <h2 className="font-display text-4xl md:text-5xl text-clr-charcoal font-bold leading-tight mb-6">
              Book Your Free<br />
              <span className="italic text-clr-gold">Solar Feasibility Audit</span>
            </h2>
            <p className="text-xs md:text-sm text-clr-text-light leading-relaxed font-body mb-8 max-w-md">
              Plan your transition to clean energy with confidence. Submit your details to generate a booking reference and open a WhatsApp inquiry with the complete site-audit request.
            </p>

            <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-[#999999]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-clr-olive" />
                <span>Tata Power Channel Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-clr-olive" />
                <span>Waaree Elite Fitting Partner</span>
              </div>
            </div>
          </div>

          {/* Form Column matching Vibhuti Interiors form wrapper */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100/90 p-8 md:p-12 rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.03)] flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-name" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                    <input 
                      id="booking-name"
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-phone" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                    <input 
                      id="booking-phone"
                      type="tel" 
                      name="phone"
                      required
                      inputMode="tel"
                      pattern="[0-9+\-\s()]{8,16}"
                      placeholder="e.g. 70226 73119" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-service" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Solar System Type</label>
                  <select 
                    id="booking-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal cursor-pointer"
                  >
                    <option value="Residential Solar">Residential Solar</option>
                    <option value="Commercial & Industrial">Commercial & Industrial</option>
                    <option value="Net-Metering Grid Connect">Net-Metering Grid Connect</option>
                    <option value="Support & Maintenance">Support & Maintenance</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-date" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
                    <input 
                      id="booking-date"
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time Picker */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="booking-time" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Preferred Time Slot</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
                    <input 
                      id="booking-time"
                      type="time" 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal cursor-pointer"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="booking-message" className="text-[10px] font-bold text-clr-charcoal uppercase tracking-widest font-body">Additional Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#999999]" />
                    <textarea 
                      id="booking-message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Specify your approximate roof space, monthly utility bill details, etc..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-xs md:text-sm focus:bg-white focus:border-clr-gold focus:outline-none transition-all duration-300 font-body text-clr-charcoal resize-none"
                    />
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full py-4 bg-clr-olive text-white hover:bg-clr-olive-dark text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer shadow-md"
              >
                <span>Request Booking</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Success Modal showing local database sync status */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setShowSuccess(false)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-success-title"
              className="bg-white max-w-md w-full rounded-[28px] p-8 text-center shadow-2xl relative z-10 border border-clr-gold/10"
            >
              <div className="text-clr-olive flex justify-center mb-5">
                <CheckCircle2 className="w-16 h-16 stroke-[1.2]" />
              </div>

              <h3 id="booking-success-title" className="font-display text-2xl font-bold text-clr-charcoal mb-2">
                Booking Request Ready
              </h3>
              <p className="text-xs text-clr-text-light font-body leading-relaxed mb-6">
                Your inquiry has been prepared for WhatsApp. Keep this reference number for follow-up with the Tarun Solar Rooftop team.
              </p>

              <div className="bg-gray-50 border border-gray-100/90 rounded-2xl p-4 mb-8 text-left font-body">
                <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase mb-1">
                  <span>Inquiry Status</span>
                  <span className="text-clr-olive">Prepared</span>
                </div>
                <div className="text-xs text-clr-charcoal font-semibold">
                  Ticket ID: <span className="font-mono text-clr-gold">{bookingId}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:hello@tarunsolarsolutions.com?subject=${encodeURIComponent(`Solar Audit Booking [${bookingId}]`)}&body=${encodeURIComponent(`Please follow up on booking reference ${bookingId}.`)}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 border border-clr-gold/30 text-clr-charcoal hover:border-clr-gold text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="flex-1 rounded-full py-3 bg-clr-charcoal text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>

              <button 
                onClick={() => setShowSuccess(false)}
                aria-label="Close booking confirmation"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-250 flex items-center justify-center text-gray-400 hover:text-black cursor-pointer"
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
