import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Quote from '../assets/Quote.png';
import Avatar from '../assets/Avater.png';
import Avatar2 from '../assets/Avater2.png';
import Avatar3 from '../assets/Avater3.png';
import underline from '../assets/underline.svg';

const Slider = () => {
  const splideRef = useRef(null);

  const clientCards = [
    {
      id: 1,
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      text: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      avatar: Avatar,
    },
    {
      id: 2,
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      text: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      avatar: Avatar2,
    },
    {
      id: 3,
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      text: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      avatar: Avatar3,
    },
    {
      id: 4,
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      text: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      avatar: Avatar,
    },
    {
      id: 5,
      name: 'Oberon Shaw, MCH',
      role: 'Head of Talent Acquisition, North America',
      text: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      avatar: Avatar2,
    },
  ];

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('+1');
    }
  };

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('-1');
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-40">
        <h2 className="text-5xl font-bold text-center mb-12">
          What Our Clients {' '}
          <span className="relative inline-block">
            <span className="relative z-10">Says</span>
            <img
              src={underline}
              alt="Underline"
              className="absolute -bottom-2 left-4 h-[10px] w-[300px] z-0 transform scale-y-500 scale-x-150 origin-bottom"
            />
          </span>
        </h2>

        <Splide
          ref={splideRef}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: false,
            breakpoints: {
              640: { perPage: 1 },
              768: { perPage: 2 },
            },
          }}
        >
          {clientCards.map((card, index) => (
            <SplideSlide key={card.id}>
              <div
                className={`p-6 rounded-lg min-h-[320px] flex flex-col justify-between ${
                  index % 2 === 0 ? 'bg-white shadow-md' : 'bg-[#4F9CF9] text-white'
                }`}
              >
                <img
                  src={Quote}
                  alt="Quote"
                  className={`w-14 h-10 mb-4 mt-4 ${
                    index % 2 !== 0 ? 'filter brightness-0 invert' : ''
                  }`}
                />
                <p className={`mb-4 text-xs ${index % 2 === 0 ? 'text-gray-700' : 'text-white'}`}>
                  {card.text}
                </p>
                <div className={`h-px w-full mb-4 ${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'}`} />
                <div className="flex items-center">
                  <img
                    src={card.avatar}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg text-[#212529]">{card.name}</h3>
                    <p className={`text-xs font-thin ${index % 2 === 0 ? 'text-gray-500' : 'text-white'}`}>
                      {card.role}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#4F9CF9] hover:bg-[#043873] transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 20"
              fill="none"
ё            >
              <path
                d="M10 2L2 10L10 18"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[#4F9CF9] hover:bg-[#043873] transition-colors duration-300"
            aria-label="Next slide"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M2 2L10 10L2 18"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;