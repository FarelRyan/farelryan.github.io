import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Career from '@/components/Career';
import Portfolio from '@/components/Portfolio';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
