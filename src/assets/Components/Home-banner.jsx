// src/Banner.js
import React from 'react';
import bannerImage from '../img/bandeau_agencySelfPromo.jpg'; // Replace with your image path

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        <h1>Digital Business Accelerator</h1>
        <p>Marketing | Design | Technologie</p>
      </div>
    </section>
  );
};

export default Banner;