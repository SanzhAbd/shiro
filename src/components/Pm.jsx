import React from 'react';
import wmVector from '../assets/wm-vector.svg';
import underline from '../assets/underline.svg';
import pmImage from '../assets/pm.jpg';

const Pm = () => {
  return (
    <section className="bg-[#ffffff] relative overflow-hidden h-[600px] flex items-center w-full px-4 sm:px-8 md:px-12 lg:px-30">
      {/* Фоновое изображение wmVector */}
      <img
        src={wmVector}
        alt="Vector"
        className="absolute top-[8rem] sm:top-[10rem] md:top-[13rem] left-0 w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] md:w-[16rem] md:h-[16rem] object-cover"
      />

      {/* Контент */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Текстовый блок */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000] leading-tight">
            Project <br />
            <span className="block text-[#000] font-extrabold">Management</span>
            <img 
              src={underline} 
              alt="Underline" 
              className="relative block w-48 sm:w-64 md:w-80 -z-1 bottom-3 mx-auto md:mx-0" 
            />
          </h1>
          <p className="text-gray-600 mt-4 text-[12px] sm:text-[13px]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="mt-6 bg-[#4F9CF9] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Get Started →
          </button>
        </div>

        {/* Блок с изображением pm.jpg */}
        <div className="w-full md:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
          <img
            src={pmImage}
            alt="Project Management"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy" // Ленивая загрузка для оптимизации
          />
        </div>
      </div>
    </section>
  );
};

export default Pm;