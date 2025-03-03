import React from 'react';
import WindowsLogo from '../assets/windows-white.png';
import AppleLogo from '../assets/apple-white-logo.png';
import AndroidLogo from '../assets/android-logo.png';

const Try = () => {
  return (
    <section className="bg-[#043873] relative overflow-hidden h-[480px] flex flex-col justify-center items-center">
      {/* Заголовок */}
      <h2 className="text-5xl text-white font-bold text-center mb-6">
        Try Whitespace <br /> today
      </h2>

      {/* Описание */}
      <p className="text-md font-light text-white text-center">
        Get started for free. <br />
        Add your whole team as your needs grow.
      </p>

      {/* Кнопка */}
      <button className="bg-[#4F9CF9] text-white px-5 py-3 rounded-sm hover:bg-[#3a7bd5] transition text-xs font-light w-[150px] mt-6">
        Try Taskey free →
      </button>

      {/* Дополнительный текст */}
      <p className="text-md font-light text-white text-center mt-6">
        On a big team? Contact sales
      </p>

      {/* Логотипы */}
      <div className="flex justify-center items-center gap-6 mt-8">        
        <img src={AppleLogo} alt="Apple" className="w-10 h-10" />
        <img src={WindowsLogo} alt="Windows" className="w-10 h-10" />
        <img src={AndroidLogo} alt="Android" className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Try;