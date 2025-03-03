import React from 'react';
import WorkTogetherLogo from '../assets/work-tgthr-logo.svg';
import KeyIcon from '../assets/key.png';
import LockIcon from '../assets/lock.png';
import DatabaseIcon from '../assets/database.png';
import ShieldIcon from '../assets/shield.png';
import underline from '../assets/underline.svg';

const Yourdata = () => {
  const items = [
    { 
      icon: KeyIcon,
      x: 170,  
      y: 60  
    },
    {
      icon: LockIcon,
      x: 500,
      y: 220
    },
    {
      icon: DatabaseIcon,
      x: 420,
      y: 60
    },
    {
      icon: ShieldIcon,
      x: 100,
      y: 220
    }
  ];

  return (
    <div className="container mx-auto max-w-full flex justify-between pb-10 mt-20 px-30">
      <div className="w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-5xl font-bold text-[#000000]">
          100% {' '}
  <span className="relative inline-block">
    <span className="relative z-10">your data</span>
    <img
      src={underline}
      alt="Underline"
      className="absolute -bottom-4 left-10 h-[8px] w-[full] z-0 transform scale-y-400 scale-x-160 origin-bottom"
            />
          </span>
        </h2>
        <p className="text-[#000000] text-xs font-thin max-w-md">
        The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button className="bg-[#4F9CF9] text-white px-5 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px] w-[130px]">
            Read more →
          </button>
      </div>

      <div className="w-1/2 relative h-[400px]">
        <svg
          width="450"
          height="280"
          viewBox="0 0 400 255"
          fill="none"
          className="absolute right-0"
        >
          <path
            d="M100 80L200 230"
            stroke="#A7CEFC"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <path
            d="M300 80L200 230"
            stroke="#A7CEFC"
            strokeWidth="2"
            strokeDasharray="10 10"
          />

          <rect 
            x="160"
            y="162"
            width="80"
            height="80"
            rx="4"
            ry="4"
            stroke="#A7CEFC"
            strokeWidth="2"
            strokeDasharray="10 10"
            fill="white"
          />

          <path
            d="M10 200L390 200"
            stroke="#A7CEFC"
            strokeWidth="2"
            strokeDasharray="10 10"
          />

          <path
            d="M10 200 A190 190 0 0 1 390 200"
            stroke="#A7CEFC"
            strokeWidth="2"
            strokeDasharray="10 10"
            fill="none"
          />

          <image
            x="155"
            y="160"
            width="90"
            height="90"
            xlinkHref={WorkTogetherLogo}
          />

          <circle cx="200" cy="10" r="8" fill="#A7CEFC" />
          <circle cx="300" cy="200" r="8" fill="#A7CEFC" />
          <circle cx="140" cy="140" r="8" fill="#A7CEFC" />
        </svg>

        {items.map((item, index) => (
          <div 
            key={index}
            className="absolute w-12 h-12 bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <img 
              src={item.icon} 
              alt="icon" 
              className="w-8 h-8 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yourdata;