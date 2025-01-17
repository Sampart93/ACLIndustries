import React from 'react';
import Imgswirl from '../../../assets/Asset 1.png';

const Image: React.FC = () => {
  return (
    <section
      className="absolute bottom--50 w-screen h-[400px] bg-cover bg-center z-[-1]"
      style={{
        backgroundImage: `url(${Imgswirl})`,
        backgroundRepeat: 'no-repeat',
      }}
    ></section>
  );
};

export default Image;