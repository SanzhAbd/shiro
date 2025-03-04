import React, { useState } from 'react';
import logo from '../assets/logo_white_ws.png';
import Group from '../assets/Group.png';
import Vector from '../assets/Vector.png';
import Facebook from '../assets/Facebook.png';
import Twitter from '../assets/Twitter.png';
import Linkedin from '../assets/Linkedin.png';

const Footer = () => {
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German']; 

  return (
    <section className="bg-[#043873] py-16">
      <div className="container mx-auto px-30">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="flex flex-col space-y-4">
            <img src={logo} alt="Whitepace Logo" className="h-6 w-35" />
            <p className="text-white text-xs font-thin">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold">Product</h3>
            <ul className="text-white text-xs font-thin space-y-2">
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Overview
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Pricing
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Customer stories
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold">Resources</h3>
            <ul className="text-white text-xs font-thin space-y-2">
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Blog
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Guides & tutorials
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Help center
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-white font-sm font-bold">Company</h2>
            <ul className="text-white space-y-2 text-xs font-thin">
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                About us
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Careers
              </li>
              <li className="hover:text-[#FFE492] transition-colors duration-200">
                Media kit
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold">Try It Today</h3>
            <p className="text-white text-xs font-thin">
              Get started for free. <br />
              Add your whole team as your needs grow.
            </p>
            <button className="bg-[#4F9CF9] text-white px-5 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-xs font-light w-[150px]">
              Start today →
            </button>
          </div>
        </div>

        <div className="h-px bg-[#2E4E73] my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs font-light space-y-4 md:space-y-0">
          <div className="flex items-center space-x-10">
            <div
              className="flex items-center space-x-2 relative"
              onMouseEnter={() => setIsLanguageListOpen(true)}
              onMouseLeave={() => setIsLanguageListOpen(false)}
            >
              <img src={Group} alt="Language" className="w-4 h-4" />
              <span className="transition-colors duration-200">English</span>
              <img
                src={Vector}
                alt="Arrow"
                className={`w-2 h-1 transition-colors duration-200 ${
                  isLanguageListOpen ? 'filter brightness-0 invert' : ''
                }`}
              />

              {isLanguageListOpen && (
                <div className="absolute bottom-6 left-0 bg-white text-[#043873] rounded-lg shadow-md p-2 z-10">
                  <ul className="space-y-2">
                    {languages.map((language, index) => (
                      <li
                        key={index}
                        className="hover:text-[#FFE492] transition-colors duration-200 cursor-pointer"
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <span className="hover:text-[#FFE492] transition-colors duration-200">
              Terms & privacy
            </span>
            <span className="hover:text-[#FFE492] transition-colors duration-200">
              Security
            </span>
            <span className="hover:text-[#FFE492] transition-colors duration-200">
              Status
            </span>
            <span>©2021 Whitepace LLC.</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-6">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-3 h-4 hover:opacity-80 transition-opacity duration-200"
              />
              <img
                src={Twitter}
                alt="Twitter"
                className="w-5 h-4 hover:opacity-80 transition-opacity duration-200"
              />
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-4 h-4 hover:opacity-80 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
