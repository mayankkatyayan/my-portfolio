'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    { src: '/public/images/caousel1.jpg', alt: 'c1' },
    { src: '/images/caousel2.jpg', alt: 'c2' },
    { src: '/images/caousel3.jpg', alt: 'c3' },
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
        margin: 'auto',
        height: '100%',
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
              // height: '1200px', // Ensure this matches your desired height
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
