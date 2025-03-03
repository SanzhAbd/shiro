import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Pm from './components/Pm';
import Worktogether from './components/Worktogether';
import Extension from './components/Extension';
import Needs from './components/Needs';
import Pricing from './components/Pricing';
import Yourwork from './components/Yourwork';
import Yourdata from './components/Yourdata';
import Sponsors from './components/Sponsors';
import Apps from './components/Apps';
import Try from './components/Try';
import Slider from './components/Slider';

function App() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToPricing={scrollToPricing} />
      <Hero />
      <Pm />
      <Worktogether />
      <Extension />
      <Needs />
      <Pricing ref={pricingRef}/>
      <Yourwork />
      <Yourdata />
      <Sponsors />
      <Apps />
      <Slider />
      <Try />
      <Footer />
    </div>
  );
}

export default App;