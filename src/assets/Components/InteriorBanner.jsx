import React from 'react';

const InteriorBanner = ({ imageUrl, title, subtitle, breadcrumb }) => {
  
  return (
    <section className="interior-banner">
      <img src={imageUrl} alt={title} className="banner-image" />
      <div className="banner-content">
        <h1 className="title">{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {breadcrumb && (
          <p className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                <a href={item.link}>{item.label}</a>
                {index < breadcrumb.length - 1 && ' / '}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default InteriorBanner;
