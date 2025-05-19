import Navbar from "@/components/elements/Navbar";
import Banner from "@/components/sections/Banner";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import ProductShowCase from "@/components/sections/ProductShowCase";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
    </>
  );
}
