import React from 'react';
import background from '../assets/BACKGROUND.svg';
import underline from '../assets/underline.svg';

const Yourwork = () => {
  return (
    <div
      className="w-full h-[350px] bg-[#043873] relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '25%',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-center h-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-[#ffffff] mb-6">
            Your work, everywhere{' '}
            <span className="relative inline-block">
              <span className="relative z-10">you are</span>
              <img
                src={underline}
                alt="Underline"
                className="absolute -bottom-1 -left-1 z-0"
                style={{ 
                  width: '600',
                  height: '12px',
                  filter: 'brightness(0) saturate(100%) invert(54%) sepia(99%) saturate(384%) hue-rotate(173deg) brightness(97%) contrast(95%)'
                }}
              />
            </span>
          </h2>
          <p className="text-[#ffffff] text-xs mb-12 max-w-2xl mx-auto font-thin">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4F9CF9] text-white px-7 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px]">
            Try Taskey →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yourwork;