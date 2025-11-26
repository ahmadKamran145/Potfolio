import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Spaces } from "./components/Spaces";
import { GallerySection } from "./components/GallerySection";
import { Testimonials } from "./components/Testimonials";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#02060d] text-white">
      <Navbar />
      <main>
        
        <Hero />
        <Gallery/>
        <Services />
        <Spaces />
        <GallerySection />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
