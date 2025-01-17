import React, { useState } from 'react';
import FTImage from '../../../assets/Asset 1.png';
import test from '../../../assets/test.png';

const Carousel2: React.FC = () => {
  const items = [
    {
      title: 'Industrial Flooring',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Slip Resistant Resin Flooring',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Hygienic Resin Floors',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Anti Static Flooring',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Polished Concrete',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Epoxy Coatings',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Resin Floor Screeds',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'MMA Rapid Cure Resins',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Polyaspartic Fast Cure Resins',
      subtitle: 'Industrial',
      img: test,
    },
    {
      title: 'Wall Cladding',
      subtitle: 'Industrial',
      img: test,
    },
  ];

  const itemsPerPage = 6;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleItems.push(items[(currentIndex + i) % items.length]);
  }

  return (
    <div
      className="relative w-full h-[400px] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${FTImage})`,
        backgroundPosition: 'bottom',
        bottom: '-10px',
      }}
    >
      {/* Heading */}
      <div className="absolute left-0 w-full p-4"
      style={{bottom : '450px'}}
      >
        <h2 className="text-3xl text-[rgb(34,50,109)] font-bold mb-8 mt-8 text-left">
          Latest News <span className="font-normal text-[rgb(241,92,34)]">& Projects</span>
        </h2>
      </div>

      <div className="flex overflow-hidden space-x-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="w-80 flex-shrink-0 rounded-lg shadow-lg transform transition-transform"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="bg-white rounded-b-lg p-4">
              <h3 className="text-xl text-[rgb(34,50,109)] font-semibold">{item.title}</h3>
              <p className="text-sm text-[rgb(241,92,34)]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel2;
