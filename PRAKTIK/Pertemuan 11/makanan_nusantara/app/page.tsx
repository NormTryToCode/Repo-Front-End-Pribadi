import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/hero/HeroCarousel";
import WhyUs from "@/components/sections/WhyUs";
import AboutUs from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <WhyUs />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}
