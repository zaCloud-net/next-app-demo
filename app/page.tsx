import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Features from './components/home/Features';
import Pricing from './components/home/Pricing';
import FAQ from './components/home/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <FAQ />
    </div>
  );
}