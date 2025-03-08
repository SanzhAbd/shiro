import React from 'react';
import underline from '../assets/underline.svg';
import needsImage from '../assets/Needs.jpg';

const Needs = () => {
  return (
    <section className="bg-white py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-30 flex flex-col md:flex-row items-center pb-10">
        {/* Блок с изображением */}
        <div className="w-full md:w-1/2 relative h-[250px] md:h-[400px] flex justify-center items-center mb-8 md:mb-0">
          <div className="w-full md:w-[480px] h-[200px] md:h-[340px]">
            <img
              src={needsImage}
              alt="Customise it to your needs"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy" // Ленивая загрузка для оптимизации
            />
          </div>
        </div>

        {/* Текстовый блок */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-4 md:mb-6">
            Customise it to{' '}
            <span className="relative block">
              <span className="relative z-10">your needs</span>
              <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-2 -left-2 w-[200px] sm:w-[300px] z-0"
              />
            </span>
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-[12px] sm:text-[13px] leading-relaxed">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="bg-[#4F9CF9] text-white px-6 py-2 md:px-7 md:py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Let's Go →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Needs;