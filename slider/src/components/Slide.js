import React from "react";
// destrutturo props passato da slider
const Slide = ({ voto, recensione, autore, classes }) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{recensione}</h4>
        <p>{autore}</p>
        <p className="star-container">{voto}</p>
      </div>
    </article>
  );
};

export default Slide;
