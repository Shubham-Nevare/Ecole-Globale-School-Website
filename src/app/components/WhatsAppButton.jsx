"use client";

import { useEffect, useState } from "react";
import { CONTACT_CONFIG } from "@/config/contact";

export default function WhatsAppButton() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          const winH = window.innerHeight;
          const scrollY = window.scrollY || window.pageYOffset || 0;

          const halfway = (docHeight - winH) / 2;
          const nearBottom = scrollY + winH >= docHeight - 150;

          setShowBackToTop(scrollY >= halfway || nearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${
      CONTACT_CONFIG.phone
    }?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`fixed right-8 p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-50 ${
        showBackToTop ? "bottom-20" : "bottom-8"
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
      <span className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </button>
  );
}
