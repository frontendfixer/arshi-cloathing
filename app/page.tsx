import { About } from "@/app/components/About";
import { Collections } from "@/app/components/Collections";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { Gallery } from "@/app/components/Gallery";
import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";
import { WhyUs } from "@/app/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
