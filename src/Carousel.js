import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import imageOne from './assets/ls-f-sport.jpg';
import imageTwo from './assets/ls-hybrid.jpg';
import imageThree from './assets/ls.jpg';

const MyCarousel = () => (
  
    <Carousel className="carousel"  centered infinite arrows slidesPerPage={2}>
    <img src={imageOne} alt="black car" />
    <img src={imageTwo} alt="red car" />
    <img src={imageThree} alt="white car" />
  </Carousel>

);

export default MyCarousel;
