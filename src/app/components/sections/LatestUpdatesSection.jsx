"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function LatestUpdatesSection() {
  const sliderRef = useRef(null);

  const updates = [
    {
      title: "CIE Orientation at 2025",
      date: "December 12, 2025",
      excerpt:
        "The CIE Orientation for Grade 8, held on 12 December, marked an important milestone for students stepping into the Cambridge...",
      category: "Events",
    },
    {
      title: "A Night of Glitter, Grooves & Goodbye Smiles",
      date: "December 12, 2025",
      excerpt:
        "The farewell for the Batch of 2026, held on 12th December, was an evening brimming with warmth, sparkle, and sheer...",
      category: "Events",
    },
    {
      title: "Christmas Celebration at 2025",
      date: "December 11, 2025",
      excerpt:
        "With girls leaving on the 13th, Christmas arrived early at Ecole, casting its magic over the school on 11th December...",
      category: "Events",
    },
  ];

  // 👉 Auto slide on MOBILE only (right → left)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // run only on mobile
    if (window.innerWidth > 768) return;

    const interval = setInterval(() => {
      // move LEFT
      slider.scrollBy({
        left: 260,
        behavior: "smooth",
      });

      // if we reach the end → go back to start
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
          Latest Updates
        </h2>

        {/* ⭐ Mobile slider — Desktop grid */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory
            sm:grid sm:grid-cols-2 lg:grid-cols-3
            scrollbar-hide
            pb-2
          "
        >
          {updates.map((update, idx) => (
            <article
              key={idx}
              className="
                min-w-[85%] sm:min-w-0 snap-center
                bg-gray-50 rounded-xl border border-gray-200
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs sm:text-sm text-blue-900 font-semibold flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {update.category}
                  </span>

                  <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {update.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {update.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                  {update.excerpt}
                </p>

                <a
                  href="#"
                  className="
                    text-blue-900 font-semibold text-sm sm:text-base
                    hover:text-blue-700 transition-colors
                    flex items-center gap-1 group
                  "
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/latest-updates"
            className="
              inline-flex items-center gap-2
              bg-blue-900 text-white
              px-6 sm:px-8 py-3 rounded-md
              font-semibold
              hover:bg-blue-800
              transition-colors group
            "
          >
            View All Updates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
