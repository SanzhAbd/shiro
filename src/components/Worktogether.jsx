import React from 'react';
import workTogetherLogo from '../assets/work-tgthr-logo.svg';
import underline from '../assets/underline.svg'; 

const WorkTogether = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-25 flex items-center pb-10">
        <div className="w-1/2 relative h-[400px] flex justify-center items-center">
          <svg
            width="450"
            height="450"
            viewBox="0 0 400 400"
            fill="none"
            className="absolute"
          >
            <circle
              cx="200"
              cy="200"
              r="190"
              stroke="#A7CEFC"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>

          <div className="absolute w-full h-full">
            <div className="w-12 h-12 bg-[#FFDC4D] rounded-full absolute top-0 left-32.5"></div>
            <div className="w-12 h-12 bg-[#FF5758] rounded-full absolute top-1/2 left-8 transform -translate-y-1/2"></div>
            <div className="w-12 h-12 bg-[#37A3FF] rounded-full absolute bottom-0 left-31"></div>
            <div className="w-12 h-12 bg-[#00CA75] rounded-full absolute top-60 right-11"></div>
            <div className="w-12 h-12 bg-[#37A3FF] rounded-full absolute top-10 right-20"></div>
          </div>

          <svg
            width="250"
            height="250"
            viewBox="0 0 300 300"
            fill="none"
            className="absolute"
          >
            <circle
              cx="150"
              cy="150"
              r="140"
              stroke="#A7CEFC" 
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>

          <div className="absolute w-full h-full">
            <div className="w-12 h-12 bg-[#37A3FF] rounded-full absolute top-1/2 left-33 transform -translate-y-1/2"></div>
            <div className="w-12 h-12 bg-[#37A3FF] rounded-full absolute top-1/2 right-33 transform -translate-y-1/2"></div>
            <div className="w-12 h-12 bg-[#FFBF60] rounded-full absolute bottom-15.5 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-12 h-12 bg-[#00CA75] rounded-full absolute top-15.5 left-1/2 transform -translate-x-1/2"></div>
          </div>

          <img
            src={workTogetherLogo}
            alt="Work Together Logo"
            className="w-28 h-28 absolute"
          />
        </div>

        <div className="w-1/2 pl-8">
        <h2 className="text-5xl font-bold text-[#000000] mb-6">
          Work{' '}
           <span className="relative inline-block">
             <span className="relative z-10">together</span>
               <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-1 left-0 w-[300px] z-0"
               />
           </span>
        </h2>
          <p className="text-gray-600 mb-8 text-[12px]">
            With whitespace, share your notes with your colleagues and collaborate on them.  
            You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="bg-[#4F9CF9] text-white px-8 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Try it now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;