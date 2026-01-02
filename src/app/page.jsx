
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import AccoladesSection from './components/sections/AccoladesSection';
import LatestUpdatesSection from './components/sections/LatestUpdatesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import InstagramSection from './components/sections/InstagramSection';




export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <AccoladesSection />
        <LatestUpdatesSection />
        <InstagramSection />
        <TestimonialsSection />
        <FAQSection />
    </>
  );
}
