import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Optimized font loading with display swap for better performance
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title:
    "Ecole Globale International Girls' School | Best Boarding School in Dehradun",
  description:
    "Ecole Globale International Girls' School is one of the premier boarding schools for girls in Dehradun, ranked #2 in India. Offering CBSE and Cambridge International Education (CIE) curriculum for classes IV to XII.",
  keywords:
    "girls boarding school, Dehradun, international school, CBSE, Cambridge, best boarding school India",
  authors: [{ name: "Ecole Globale" }],
  openGraph: {
    title: "Ecole Globale International Girls' School",
    description: "India's Premier Boarding School For Girls in Dehradun",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased `}>
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
