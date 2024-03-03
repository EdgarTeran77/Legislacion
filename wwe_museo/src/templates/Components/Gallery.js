// Rutas de importación en Gallery.js

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image2 from '../../styles/images/min5.jpg';
import image3 from '../../styles/images/min4.jpg';
import image4 from '../../styles/images/min6.jpg';
import image5 from '../../styles/images/min7.jpg';
import image6 from '../../styles/images/min8.jpg';
import image7 from '../../styles/images/min9.jpg';

const Gallery = () => {
  const images = [
    {
      original: image7,
      thumbnail: image7,
      description: 'Descripción de la imagen 1'
    },
    {
      original: image2,
      thumbnail: image2,
      description: 'Descripción de la imagen 2'
    },
    {
        original: image3,
        thumbnail: image3,
        description: 'Cuarzo Pirita'
      },
      {
        original: image5,
        thumbnail: image5,
        description: 'Cuarzo Pirita'
      },
      {
        original: image4,
        thumbnail: image4,
        description: 'Cuarzo Pirita'
      },
      {
        original: image6,
        thumbnail: image6,
        description: 'Cuarzo Pirita'
      }
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
