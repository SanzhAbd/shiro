import React from 'react';
import logo from '../assets/logo_white_ws.png';
import downArrow from '../assets/down-arrow.png';

const Header = ({ scrollToPricing }) => {
  return (
    <header className="bg-[#043873] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-30">
        <div className="flex items-center">
          <img src={logo} alt="Whitepace Logo" className="h-6" />
        </div>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Products <img src={downArrow} alt="Down Arrow" className="ml-1 h-6 w-6 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Solutions <img src={downArrow} alt="Down Arrow" className="ml-1 h-6 w-6 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Resources <img src={downArrow} alt="Down Arrow" className="ml-1 h-6 w-6 filter brightness-0 invert" />
            </a>
            <a
              href="#"
              className="text-white text-[12px] hover:text-blue-300 flex items-center"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToPricing();
              }}
            >
              Pricing <img src={downArrow} alt="Down Arrow" className="ml-1 h-6 w-6 filter brightness-0 invert" />
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-[#FFE492] text-[#043873] px-6 py-2 rounded-md hover:bg-[#e6cf82] transition text-[12px] h-10">
              Login
            </button>

            <button className="bg-[#4F9CF9] text-white px-5 py-1.5 rounded-md hover:bg-[#3a7bd5] transition flex items-center text-[12px] h-10 w-42">
              Try Whitespace free →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;