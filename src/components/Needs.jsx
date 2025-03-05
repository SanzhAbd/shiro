import React from 'react';
import underline from '../assets/underline.svg'; 
import needsImage from '../assets/Needs.jpg';



const Needs = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-30 flex items-center pb-10">
        <div className="w-1/2 relative h-[400px] flex justify-center items-center">
          <div className="w-[480px] h-[340px]">
          <img
            src={needsImage} 
            alt="Extension"
            className="w-full h-full object-cover rounded-lg"
          />
          </div>
        </div>

        <div className="w-1/2 pl-8">
        <h2 className="text-5xl font-bold text-[#000000] mb-6">
        Customise it to{' '}
           <span className="relative block">
             <span className="relative z-10">your needs</span>
               <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-2 -left-2 w-[300px] z-0"
               />
           </span>
        </h2>
          <p className="text-gray-600 mb-8 text-[12px]">
          Customise the app with plugins, custom themes and multiple text editors (Rich<br /> Text or Markdown). Or create your own scripts and plugins using the Extension<br /> API.
          </p>
          <button className="bg-[#4F9CF9] text-white px-7 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Let's Go →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Needs;