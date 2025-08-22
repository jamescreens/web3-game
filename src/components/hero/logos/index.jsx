import React from 'react';
import { bnb, bga, chainlink, chainplay, coinmerge, mexc, polygon, cronos } from '@/assets/images';

const LogoSlider = () => {
  const logos = [
    bnb,
    bga,
    chainlink,
    chainplay,
    coinmerge,
    mexc,
    polygon,
    cronos,
  ];

  return (
    <div className="logo-slider-wrapper" style={{
      border: "4px solid",
      borderImageSource: 'linear-gradient(259.78deg, #F8672C 24.89%, #5543D1 73.05%)',
      borderImageSlice:1,
      borderInline:'none'
    }}>
      <div className="logo-slide-track">
        {logos.map((logo, index) => (
          <div className="logo-slide h-[32px] md:h-[80px] flex items-center justify-center py-[10px] px-[10px]" key={index}>
            <img src={logo.src} alt={`Logo ${index}`} />
          </div>
        ))}
        {/* Duplicate the logos to ensure smooth scrolling */}
        {logos.map((logo, index) => (
          <div className="logo-slide h-[32px] md:h-[80px] flex items-center justify-center py-[10px] px-[10px]" key={index + logos.length}>
            <img src={logo.src} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
