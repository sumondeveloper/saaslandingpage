import Navbar from "@/components/elements/Navbar";
import Banner from "@/components/sections/Banner";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
}
