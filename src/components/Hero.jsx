import React from 'react';
import heroVector from '../assets/hero-vector.svg';

const Hero = () => {
  return (
    <section className="bg-[#043873] relative overflow-hidden h-[600px] flex justify-center items-center">
      <img
        src={heroVector}
        alt="Hero Vector"
        className="w-full h-full object-cover absolute top-0 left-0 pb-30 pt-30"
      />

      <div className="relative z-10 flex items-center justify-between w-full max-w-[1200px] px-20">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get More Done with whitespace
          </h1>
          <p className="text-[13px] text-white mb-8 font-thin">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button
            className="bg-[#4F9CF9] text-white px-3 py-3 rounded-sm hover:bg-[#3a7bd5] transition flex items-center justify-center text-[12px] h-10 w-39 space-x-1"
          >
            Try Whitespace free →
          </button>
        </div>

        <div className="w-[624px] h-[350px] bg-[#C4DEFD] p-8">
        </div>
      </div>
    </section>
  );
};

export default Hero;
