"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, X, ArrowUp } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end">
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* Book Appointment */}
      <Link
        href="/contact"
        className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-blue transition-all hover:-translate-y-0.5"
      >
        <Calendar size={15} />
        Book Appointment
      </Link>

      {/* Call Now - always visible */}
      <a
        href={`tel:${doctor.phone}`}
        className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-teal transition-all hover:-translate-y-0.5 relative"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-40" />
        <Phone size={15} />
        <span>Call Now</span>
      </a>
    </div>
  );
}
