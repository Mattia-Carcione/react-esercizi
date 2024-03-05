import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SingleHoliday = ({
  descrizione, durata, img, prezzo, titolo, next, previous
}) => {
  return (
    <div className="holiday-container">
      <img src={img} alt={titolo} className="img"/>
      <div className="holiday-info">
        <h4>{titolo}</h4>
        <p>{descrizione}</p>
        <div className="holiday-cost">
          <small>{durata}</small>
          <h5>{(prezzo/100).toFixed(2)}€</h5>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={previous}><GrFormPreviousLink/></button>
          <button className="btn" onClick={next}><GrFormNextLink/></button>
        </div>
      </div>
    </div>
  );
};

export default SingleHoliday;
