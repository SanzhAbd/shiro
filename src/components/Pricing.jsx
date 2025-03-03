import React, { forwardRef } from 'react';
import checkbox from '../assets/checkbox.png';
import underline from '../assets/underline.svg';


const Pricing = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-white py-16 px-30 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-[#000000] mb-6">
          Choose{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Your Plan</span>
            <img
              src={underline}
              alt="Underline"
              className="absolute -bottom-1 left-2 w-[400px] z-0"
            />
          </span>
        </h2>
        <p className="text-[#000000] text-xs mb-12 max-w-2xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ffffff] p-8 rounded-lg border border-[#FFE492] mb-8 mt-8">
            <h3 className="text-xl text-left mb-4">Free</h3>
            <p className="text-left text-3xl font-bold mb-6">$0</p>
            <h5 className="text-left text-sm mb-6">Capture ideas and find them quickly</h5>
            <ul className="text-left space-y-3 mb-8 text-xs">
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Unchecked" className="w-4 h-4 mr-3" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Unchecked" className="w-4 h-4 mr-3" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <div className="text-left">
              <button className="border border-[#FFE492] px-8 py-2 rounded-lg hover:bg-[#FFE492] transition text-xs">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-[#043873] p-8 rounded-lg shadow-md pt-13">
            <h3 className="text-xl text-left text-[#ffffff] mb-4">Personal</h3>
            <p className="text-[#FFE492] text-left text-3xl font-bold mb-6">$11.99</p>
            <h5 className="text-left text-sm text-[#ffffff] mb-6">Keep home and family on track</h5>
            <ul className="text-left space-y-4 mb-8 text-xs text-[#ffffff]">
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Checked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Unchecked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Unchecked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Checked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Checked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <img
                  src={checkbox}
                  alt="Checked"
                  className="w-4 h-4 mr-3 filter brightness-0 invert-[90%] sepia-[100%] saturate-[100%] hue-rotate-[0deg]"
                  style={{ filter: 'brightness(0) invert(90%) sepia(100%) saturate(100%) hue-rotate(0deg)' }}
                />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <div className="text-left">
              <button className="bg-[#4F9CF9] text-white px-8 py-2 rounded-lg hover:bg-[#3a7bd5] transition text-xs">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-[#ffffff] p-8 rounded-lg border border-[#FFE492] mb-8 mt-8">
            <h3 className="text-xl text-left mb-4">Organization</h3>
            <p className="text-3xl text-left font-bold mb-6">$49.99</p>
            <h5 className="text-left text-sm mb-6">Capture ideas and find them quickly</h5>
            <ul className="text-left space-y-3 mb-8 text-xs">
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Unchecked" className="w-4 h-4 mr-3" />
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Unchecked" className="w-4 h-4 mr-3" />
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <img src={checkbox} alt="Checked" className="w-4 h-4 mr-3" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <div className="text-left">
              <button className="border border-[#FFE492] px-8 py-2 rounded-lg hover:bg-[#FFE492] transition text-xs">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Pricing;