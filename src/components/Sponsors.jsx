import React from 'react'
import underline from '../assets/underline.svg';
import apple from '../assets/apple.png';
import microsoft from '../assets/microsoft.png'
import Slack from '../assets/Slack.png'
import Google from '../assets/Google.png'



const Sponsors = () => {
  return (
    <div className="text-center py-16 bg-[#ffffff]">
      <h2 className="text-5xl font-bold text-gray-900 mb-12">Our  {' '}
  <span className="relative inline-block">
    <span className="relative z-10">sponsors</span>
    <img
      src={underline}
      alt="Underline"
      className="absolute -bottom-4 left-10 h-[8px] w-[full] z-0 transform scale-y-400 scale-x-160 origin-bottom"
            />
          </span>
          </h2>

      
      <div className="flex justify-center items-center gap-40 flex-wrap">
        <img
          src={apple}
          alt="Apple"
          className="h-10 hover:scale-110 transition-transform duration-300"
        />

        <img
          src={microsoft}
          alt="Microsoft"
          className="h-10 hover:scale-110 transition-transform duration-300"
        />

        <img
          src={Slack}
          alt="Slack"
          className="h-10 hover:scale-110 transition-transform duration-300"
        />

        <img
          src={Google}
          alt="Google"
          className="h-10 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

export default Sponsors