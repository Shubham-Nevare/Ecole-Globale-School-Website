"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, Send } from "lucide-react";

export default function HeroSection() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const heroImages = [
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/discover-ecole-globale-international-girls-school.jpg",
      alt: "Discover Ecole Globale International Girls School",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/horse-riding-in-girls-boarding-schools.jpg",
      alt: "Horse Riding in Girls Boarding Schools",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/best-girls-boardingschool-in-dehradun.jpg",
      alt: "Best Girls Boarding School in Dehradun",
    },
  ];

  const mobileImages = [
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/ec-mobile-5.jpg",
      alt: "Mobile Hero 1",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/ec-mobile-1.jpg",
      alt: "Mobile Hero 2",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/ec-mobile-2.jpg",
      alt: "Mobile Hero 3",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/ec-mobile-3.jpg",
      alt: "Mobile Hero 4",
    },
    {
      url: "https://www.ecoleglobale.com/wp-content/uploads/2024/03/ec-mobile-4.jpg",
      alt: "Mobile Hero 5",
    },
  ];

  // Determine which images to use based on screen size
  const currentImages = isMobile ? mobileImages : heroImages;

  // Detect screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset slide when switching between mobile and desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Welcome to Ecole Globale International Girls&apos; School in
              Dehradun
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 drop-shadow-md">
              India&apos;s Premier Boarding School For Girls
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Enquire Now
              </button>
              <a
                href="#about"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg flex items-center gap-2 justify-center group"
              >
                Learn More
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {currentImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white opacity-100 w-8"
                : "bg-white opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsEnquiryOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-gray-100">
            {/* Close Button */}
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute top-4 right-4 z-10 p-1 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Enquire Now
              </h2>

              {/* FORM BODY */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              {/* FOOTER BUTTONS */}
              <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 h-12 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  Submit
                  <Send className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(false)}
                  className="flex-1 h-12 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
