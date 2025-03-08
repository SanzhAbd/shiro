import React from 'react';
import heroVector from '../assets/hero-vector.svg';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="bg-[#043873] relative overflow-hidden h-[600px] flex justify-center items-center">
      {/* Фоновое изображение heroVector */}
      <img
        src={heroVector}
        alt="Hero Vector"
        className="w-full h-full object-cover absolute top-0 left-0 pb-30 pt-30"
      />

      {/* Контент */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-4 md:px-8 lg:px-20">
        {/* Текстовый блок */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get More Done with whitespace
          </h1>
          <p className="text-[12px] sm:text-[13px] text-white mb-6 sm:mb-8 font-thin">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button
            className="bg-[#4F9CF9] text-white px-4 py-2 sm:px-3 sm:py-3 rounded-sm hover:bg-[#3a7bd5] transition flex items-center justify-center text-[12px] h-10 w-40 sm:w-43 mx-auto md:mx-0"
          >
            Try Whitespace free →
          </button>
        </div>

        {/* Блок с изображением hero.jpg */}
        <div className="w-full md:w-[624px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy" // Ленивая загрузка для оптимизации
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;