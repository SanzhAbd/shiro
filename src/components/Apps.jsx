import React from 'react';
import bgapps from '../assets/bg-apps.png';
import img1 from '../assets/dropbox.png';
import img2 from '../assets/gmail.png';
import img3 from '../assets/google-calendar.png';
import img4 from '../assets/google-drive.png';
import img5 from '../assets/outlook.png';
import img6 from '../assets/slack-logo.png';
import centerImg from '../assets/Apps-logo.png';

const Apps = () => {
  const positions = [
    { x: 67, y: 115 },   // dropbox
    { x: 150, y: 10 },  // gmail
    { x: 150, y: 270 },  // calendar
    { x: 295, y: 200 }, // disc 
    { x: 15, y: 200 },  // outlook 
    { x: 237, y: 115 }, // slack
  ];

  return (
    <section className="bg-[#043873] relative overflow-hidden h-[480px] flex justify-center items-center">
      <img
        src={bgapps}
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="absolute z-10 left-10 top-1/2 -translate-y-1/2 px-30">
        <svg
          width="500"
          height="500"
          viewBox="70 -16 310 315" 
          className="w-[510px] h-[300px]"
        >
          <circle cx="150" cy="100" r="90" fill="none" stroke="#4F9CF9" strokeWidth="1.5" strokeDasharray="10" />
          <circle cx="100" cy="200" r="90" fill="none" stroke="#4F9CF9" strokeWidth="1.5" strokeDasharray="10" />
          <circle cx="210" cy="200" r="90" fill="none" stroke="#4F9CF9" strokeWidth="1.5" strokeDasharray="10" />

          {positions.map((pos, index) => (
            <g key={index} transform={`translate(${pos.x},${pos.y})`}>
              <circle r="25" fill="white" stroke="#fff" strokeWidth="2" />
              <image
                href={[img1, img2, img3, img4, img5, img6][index]}
                x="-15"
                y="-15"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          ))}

          <g transform="translate(154, 165)">
            <circle r="35" fill="white" stroke="#fff" strokeWidth="2" />
            <image
              href={centerImg}
              x="-17"
              y="-17"
              width="35"
              height="35"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </svg>
      </div>

      <div className="absolute z-10 left-[580px] top-1/2 -translate-y-1/2 text-white max-w-[540px] space-y-6">
        <h2 className="text-5xl font-bold leading-tight">
          Work with Your <br />Favorite Apps Using <br />whitepace
        </h2>
        <p className="text-xs font-thin mt-6 leading-relaxed">
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button className="bg-[#4F9CF9] text-white px-5 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-[12px] w-[130px] mt-4">
          Read more →
        </button>
      </div>
    </section>
  );
};

export default Apps;