import React from 'react'
import PropTypes from "prop-types";
import './YoutubeCart.css'
function YoutubeCart({embedId}) {
  return (
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeCart.propTypes = {
  embedId: PropTypes.string.isRequired
};

  
}

export default YoutubeCart