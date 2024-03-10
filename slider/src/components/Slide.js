import React from "react";
import ratingCreator from "../utils/ratingCreator";

// destrutturo props passato da slider
const Slide = ({ voto, recensione, autore, classes }) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{recensione}</h4>
        <p>{autore}</p>
        <p className="star-container">{ratingCreator(voto)}</p>
      </div>
    </article>
  );
};

export default Slide;
