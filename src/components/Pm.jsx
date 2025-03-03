import React from 'react';
import wmVector from '../assets/wm-vector.svg';
import underline from '../assets/underline.svg';

const Pm = () => {
  return (
    <section className="bg-[#ffffff] relative overflow-hidden h-[600px] flex items-center w-full px-12 md:px-30">
      <img
        src={wmVector}
        alt="Vector"
        className="absolute top-[13rem] left-0 w-[16rem] h-[16rem] object-cover"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-[#000] leading-tight">
            Project <br />
            <span className="block text-[#000] font-extrabold">Management</span>
            <img 
              src={underline} 
              alt="Underline" 
              className="relative block w-80 -z-1 bottom-3" 
            />
          </h1>
          <p className="text-gray-600 mt-4 text-[12px]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.
          </p>
          <button className="mt-6 bg-[#4F9CF9] text-white px-6 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Get Started →
          </button>
        </div>

        <div className="w-[500px] h-[350px] bg-[#C4DEFD]"></div>
      </div>
    </section>
  );
};

export default Pm;
