"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  ArrowRight,
  Send,
  Calendar,
  Clock,
  BookOpen,
  Users,
  Award,
  Shield,
  Heart,
  ChevronRight,
  Mailbox,
  Smartphone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
          const winH = window.innerHeight;
          const scrollY = window.scrollY || window.pageYOffset || 0;

          const halfway = (docHeight - winH) / 2; // center of scrollable area
          const nearBottom = scrollY + winH >= docHeight - 150; // within 150px of bottom

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

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Subscribe to our newsletter for the latest news and updates
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-blue-300/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="space-y-6">
          <div className="relative h-16 w-48 mb-3">
                  <Image
                    src="/main-logo.png"
                    alt="Ecole Globale International Girls' School"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, 200px"
                    priority
                  />
                </div>

            <p className="text-gray-300 leading-relaxed">
              A premier boarding school in Dehradun, empowering young women to become confident, independent, and global citizens since 2012.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Award className="w-4 h-4 text-blue-400" />
                <span>CBSE Affiliated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About School", icon: ChevronRight },
                { href: "/academics", label: "Academics", icon: ChevronRight },
                { href: "/admissions", label: "Admissions", icon: ChevronRight },
                { href: "/facilities", label: "Facilities", icon: ChevronRight },
                { href: "/boarding", label: "Boarding Life", icon: ChevronRight },
                { href: "/contact", label: "Contact Us", icon: ChevronRight },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <link.icon className="w-3 h-3 group-hover:text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800 inline-block">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Campus Address</p>
                  <p className="text-gray-400 text-sm">
                    Village Horawalla, Near Sahaspur
                    <br />
                    Dehradun - 248197, Uttarakhand
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mailbox className="w-5 h-5 text-blue-400" />
                <div>
                 
                  <a
                    href="mailto:info@ecoleglobale.com"
                    className="text-gray-300 text-md hover:text-blue-400 transition-colors"
                  >
                    info@ecoleglobale.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <a
                    href="tel:+919557291888"
                    className="text-gray-300 hover:text-blue-400 transition-colors block"
                  >
                    +91 9557291888
                  </a>
                 
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Office Hours</p>
                  <p className="text-gray-400 text-sm">Mon-Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect & Enquiry */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-4">
                  Book a campus tour or request a prospectus:
                </p>
                <Link
                  href="/enquire"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 w-full group shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book Campus Tour
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div>
                <p className="text-gray-300 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600", href: "#" },
                    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500", href: "#" },
                    { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600", href: "#" },
                    { icon: Youtube, label: "YouTube", color: "hover:bg-red-600", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`bg-gray-800 p-3 rounded-lg ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

            
            </div>
          </div>
        </div>

       

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; {currentYear} Ecole Globale International Girls&apos; School. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Use
                </Link>
                <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
                <Link href="/disclaimer" className="hover:text-blue-400 transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-gray-400 text-sm">Accredited & Affiliated</p>
                <div className="flex gap-2 mt-1">
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">CBSE</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">ISO 9001:2015</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">NAAC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
            aria-label="Back to top"
          >
            <ArrowRight className="w-5 h-5 transform rotate-270" />
          </button>
        )}

        
      </div>
    </footer>
  );
}