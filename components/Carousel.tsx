'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    { src: '/images/1.png', alt: 'Profile' },
    { src: '/images/github.png', alt: 'GitHub' },
    { src: '/images/linkedin.png', alt: 'LinkedIn' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      style={{
        width: '800px',
        height: '400px',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '100%',
              height: '800px', // Ensure this matches your desired height
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
