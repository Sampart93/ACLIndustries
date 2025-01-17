import React, { useState } from 'react';
import img1 from '../../../assets/Epoxy-Fooring.jpg';
import img2 from '../../../assets/resincoat-anti-slip-floor-paint.jpg';
import img3 from '../../../assets/coving-resin-flake.jpg';
import img4 from '../../../assets/image001-3.jpg';
import img5 from '../../../assets/polcon.jpeg';

const Carousel: React.FC = () => {
  const items = [
    {
      title: 'Industrial Flooring',
      subtitle: 'Industrial',
      img: img1,
    },
    {
      title: 'Slip Resistant Resin Flooring',
      subtitle: 'Industrial',
      img: img2,
    },
    {
      title: 'Hygienic Resin Floors',
      subtitle: 'Industrial',
      img: img3,
    },
    {
      title: 'Anti Static Flooring',
      subtitle: 'Industrial',
      img: img4,
    },
    {
      title: 'Polished Concrete',
      subtitle: 'Industrial',
      img: img5,
    },
    {
      title: 'Epoxy Coatings',
      subtitle: 'Industrial',
      img: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Resin Floor Screeds',
      subtitle: 'Industrial',
      img: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'MMA Rapid Cure Resins',
      subtitle: 'Industrial',
      img: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Polyaspartic Fast Cure Resins',
      subtitle: 'Industrial',
      img: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Wall Cladding',
      subtitle: 'Industrial',
      img: 'https://via.placeholder.com/300x200',
    },
  ];

  const itemsPerPage = 6; // Number of items visible at a time
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
    <div className="relative ml-4 mr-4 mx-auto h-[500px]">
      {/* Heading */}
      <h2 className="text-3xl text-[rgb(34,50,109)] font-bold mb-8 mt-8 text-left">
        Flooring Types <span className="font-normal text-[rgb(241,92,34)]">Industrial, Commercial or Repairs</span>
      </h2>

      {/* Carousel */}
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
            <div className="bg-white p-4">
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

export default Carousel;










