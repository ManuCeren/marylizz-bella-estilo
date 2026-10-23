import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiciosSection from "@/components/ServiciosSection";
import ProductosSection from "@/components/ProductosSection";
import AntesDespuesSection from "@/components/AntesDespuesSection";
import GaleriaSection from "@/components/GaleriaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiciosSection />
        <AntesDespuesSection />
        <GaleriaSection />
        <ProductosSection />
      </main>
      <Footer />
    </>
  );
}
