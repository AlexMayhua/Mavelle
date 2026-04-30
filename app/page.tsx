import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        <FeaturedCollection />
        <WhyChooseUs />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
