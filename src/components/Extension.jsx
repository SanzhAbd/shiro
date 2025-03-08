import React from 'react';
import underline from '../assets/underline.svg';
import extensionImage from '../assets/Extension.jpg';

const Extension = () => {
  return (
    <section className="bg-[#043873] relative overflow-hidden h-auto md:h-[500px] flex justify-center items-center py-12 md:py-0">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-4 md:px-8 lg:px-30">
        {/* Текстовый блок */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Use as{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Extension</span>
              <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-1 left-0 w-[200px] sm:w-[300px] z-0"
              />
            </span>
          </h1>
          <p className="text-[12px] sm:text-[13px] text-white mb-6 sm:mb-8 font-thin">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button
            className="bg-[#4F9CF9] text-white px-4 py-2 sm:px-3 sm:py-3 rounded-sm hover:bg-[#3a7bd5] transition flex items-center justify-center text-[12px] h-10 w-32 sm:w-30 mx-auto md:mx-0"
          >
            Let's Go →
          </button>
        </div>

        {/* Блок с изображением */}
        <div className="w-full md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px]">
          <img
            src={extensionImage}
            alt="Extension"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy" // Ленивая загрузка для оптимизации
          />
        </div>
      </div>
    </section>
  );
};

export default Extension;