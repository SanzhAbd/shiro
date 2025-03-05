import React from 'react';
import underline from '../assets/underline.svg'; 
import extensionImage from '../assets/Extension.jpg';


const Extension = () => {
  return (
    <section className="bg-[#043873] relative overflow-hidden h-[500px] flex justify-center items-center">
    

    <div className="relative z-10 flex items-center justify-between w-full max-w-[1200px] px-30">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-white mb-6">
          Use as{' '}
           <span className="relative inline-block">
             <span className="relative z-10">Extension</span>
               <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-1 left-0 w-[300px] z-0"
               />
           </span>
        </h1>
        <p className="text-[13px] text-white mb-8 font-thin">
           Use the web clipper extension, available on Chrome and Firefox, to save web pages <br />or take screenshots as notes.
        </p>
        <button
          className="bg-[#4F9CF9] text-white px-3 py-3 rounded-sm hover:bg-[#3a7bd5] transition flex items-center justify-center text-[12px] h-10 w-30 space-x-1"
        >
          Let's Go →
        </button>
      </div>

      <div className="w-[450px] h-[300px]">
      <img
            src={extensionImage}
            alt="Extension"
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
    </div>
  </section>
  );
};

export default Extension;