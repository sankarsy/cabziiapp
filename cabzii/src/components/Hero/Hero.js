import React from 'react';
import carPng from '../assets/darkcar.png';
import yellowCar from '../assets/yellowCar.png';

export default function Hero({ theme }) {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative w-full h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="space-y-5 sm:pr-10 text-center sm:text-left">
            <p data-aos="fade-up" data-aos-delay="600" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-lg text-gray-400 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="bg-primary text-black px-6 py-3 rounded-md hover:bg-primary/80 transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Right Side - Image */}
          <div data-aos="zoom-in" data-aos-duration="1500" className="flex justify-center">
            <img
              src={theme === 'dark' ? carPng : yellowCar}
              alt="Car"
              className="max-w-full sm:max-w-md lg:max-w-lg drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
