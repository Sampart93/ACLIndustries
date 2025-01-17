import React from 'react';
import heroImage from '../../../assets/hero3.jpg';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[800px] tablet:h-[900px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center text-white h-full px-4 pt-72 md:pt-80">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ACL Industrial Flooring
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Providing durable and high-quality Epoxy and Resin industrial flooring solutions for all industries.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[rgb(241,92,34)] text-white font-semibold rounded-md hover:bg-opacity-90 transition">
            Download Brochure
          </button>
          <button className="px-6 py-3 bg-white text-[rgb(241,92,34)] font-semibold rounded-md hover:bg-gray-200 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
