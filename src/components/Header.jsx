import React, { useState } from 'react';
import logo from '../assets/logo_white_ws.png';
import downArrow from '../assets/down-arrow.png';
import menuIcon from '../assets/menu-icon.png'; // Иконка меню (гамбургер)
import closeIcon from '../assets/close-menu.png'; // Иконка закрытия

const Header = ({ scrollToPricing }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#043873] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-30">
        {/* Логотип */}
        <div className="flex items-center">
          <img src={logo} alt="Whitepace Logo" className="h-6" />
        </div>

        {/* Навигация для десктопов */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Products <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Solutions <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[12px] hover:text-blue-300 flex items-center">
              Resources <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a
              href="#"
              className="text-white text-[12px] hover:text-blue-300 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToPricing();
              }}
            >
              Pricing <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
          </nav>

          {/* Кнопки */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFE492] text-[#043873] px-4 py-2 rounded-md hover:bg-[#e6cf82] transition text-[12px] h-10">
              Login
            </button>
            <button className="bg-[#4F9CF9] text-white px-4 py-2 rounded-md hover:bg-[#3a7bd5] transition flex items-center text-[12px] h-10">
              Try Whitespace free →
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <img src={closeIcon} alt="Close Menu" className="h-6 w-6" />
            ) : (
              <img src={menuIcon} alt="Open Menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню (раскрывающийся список) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#043873] pb-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#" className="text-white text-[14px] hover:text-blue-300 flex items-center">
              Products <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[14px] hover:text-blue-300 flex items-center">
              Solutions <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a href="#" className="text-white text-[14px] hover:text-blue-300 flex items-center">
              Resources <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
            <a
              href="#"
              className="text-white text-[14px] hover:text-blue-300 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToPricing();
                setIsMobileMenuOpen(false); // Закрываем меню после клика
              }}
            >
              Pricing <img src={downArrow} alt="Down Arrow" className="ml-1 h-4 w-4 filter brightness-0 invert" />
            </a>
          </nav>

          {/* Кнопки для мобильного меню */}
          <div className="flex flex-col space-y-4 px-4 mt-4">
            <button className="bg-[#FFE492] text-[#043873] px-4 py-2 rounded-md hover:bg-[#e6cf82] transition text-[14px] h-10">
              Login
            </button>
            <button className="bg-[#4F9CF9] text-white px-4 py-2 rounded-md hover:bg-[#3a7bd5] transition flex items-center justify-center text-[14px] h-10">
              Try Whitespace free →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;