// src/MediaSeparator.js
import React from 'react';

const MediaSeparator = ({ backgroundImage }) => {
  return (
    <div className="media-separator" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
      </div>
    </div>
  );
};

export default MediaSeparator;