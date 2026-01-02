"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState(
    new Array(6).fill(false) // All mobile menu items expanded by default
  );

  const toggleMobileItem = (idx) => {
    setExpandedMobileItems((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const menuItems = [
    {
      title: "About Us",
      submenu: [
        { name: "About School", href: "/about" },
        { name: "Vision & Mission", href: "/vision-mission" },
        { name: "President Message", href: "/president-message" },
      ],
    },
    {
      title: "Admission",
      submenu: [
        { name: "Admission Procedure", href: "/admission-procedure" },
        { name: "Online Registration Process", href: "/online-registration" },
        { name: "Online Application Process", href: "/online-application" },
        { name: "Fees Structure", href: "/fees-structure" },
        { name: "Online Fee Payment", href: "/fee-payment" },
        { name: "Withdrawal Policy", href: "/withdrawal-policy" },
      ],
    },
    {
      title: "Academics",
      submenu: [
        { name: "About CBSE Programme", href: "/cbse-programme" },
        { name: "About CI Curriculum", href: "/ci-curriculum" },
        { name: "Pedagogy", href: "/pedagogy" },
        { name: "Placements", href: "/placements" },
      ],
    },
    {
      title: "Student Life",
      submenu: [
        { name: "About Student Life", href: "/student-life" },
        { name: "Exchange Programme", href: "/exchange-programme" },
        { name: "Literary Activities", href: "/literary-activities" },
        { name: "Art & Culture", href: "/art-culture" },
        { name: "Sports School", href: "/sports-school" },
        { name: "Trips & Expedition", href: "/trips-expedition" },
        { name: "Community Service", href: "/community-service" },
      ],
    },
    {
      title: "Pastoral Care",
      submenu: [
        { name: "Overview", href: "/pastoral-care" },
        { name: "Infirmary", href: "/infirmary" },
        { name: "Dining Hall", href: "/dining-hall" },
      ],
    },
    {
      title: "Career",
      submenu: [
        { name: "Work Culture at Ecole", href: "/work-culture" },
        { name: "Upcoming Training Session", href: "/training-session" },
        { name: "Vacancies", href: "/vacancies" },
      ],
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3
        bg-white/10 backdrop-blur-md border-b border-white/20
        rounded-b-2xl
        overflow-visible
      ">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/main-logo.png"
              alt="Ecole Globale International Girls' School"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 relative">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="text-white hover:text-blue-300 font-medium py-2 flex items-center gap-1 transition-colors whitespace-nowrap">
                  {item.title}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" />
                </button>

                {/* Dropdown */}
                <div className={`absolute mt-2 w-64 
                  bg-white text-black 
                  shadow-xl rounded-xl
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                  z-50
                  ${idx === menuItems.length - 1 ? 'right-0' : 'left-0'}
                `}>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {item.submenu.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white transition-transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 animate-in fade-in duration-200" />
            ) : (
              <Menu className="w-7 h-7 animate-in fade-in duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => toggleMobileItem(idx)}
                  className="w-full flex items-center justify-between font-semibold text-white py-2 hover:text-blue-300 transition-colors"
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedMobileItems[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedMobileItems[idx] && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-200 hover:text-white hover:translate-x-1 text-sm transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
