import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  // destrutturo useState per assegnare data a reviews
  const [reviews, setReviews] = useState(data);
  const [active, setactive] = useState(0);

  // creo una funzione per aumentare active
  const next = () => {
    setactive((preValue) => {
      if (preValue + 1 === reviews.length) {
        return 0;
      }
      return preValue + 1;
    });
  }

  // creo una funzione per diminuire active
  const previous = () => {
    setactive((nextValue) => {
      if (nextValue === 0) {
        return (reviews.length - 1);
      } 
      return nextValue - 1;
    })
  }

  // creo una funzione di autoslider
  useEffect(() => {
    const timer = setTimeout(() => next(), 5000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    // mappo reviews nel componente slide
    <section className="container slider">
      {reviews.map((review, index) => {
        let position = '';
        // cambio il nome della classe in base all'indice e ad active
        if (index === active) {
          position = 'active';
        } else if (index + 1 === active || (active === 0 && index === reviews.length - 1)) {
          position = 'prev';
        } else {
          position = 'next';
        }
        return <Slide key={review.id} {...review} classes={position} />
      })}
      <div className="btn-group slider-btn-group">
        <button className="btn  btn-slider prev-slide" onClick={previous}>prev</button>
        <button className="btn btn-slider next-slide" onClick={next}>next</button>
      </div>
    </section>
  );
};

export default Slider;
