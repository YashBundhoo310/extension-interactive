// src/components/Intro.js
import React from 'react';

const Intro = ({ title, subtitle, contentBlocks, link, linkTitle }) => {
  return (
    <section className='Intro'>
      <div className="container">
        <div className="header-intro">
          <h1 className="title">{title}</h1>
        </div>
        <div className="content">
          <h2 className="subtitle">{subtitle}</h2>
          <div className="flex-container">
            {contentBlocks.map((text, index) => (
              <div className="text-block" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="learn-more">
          <a href={link} className="learn-more-link">
            {linkTitle} <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
