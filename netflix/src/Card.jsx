import React from "react";

function Card(props)
{
  return (
    <>
    <div className="Cards">
      <div className="card">
        <img src={props.imgsrc} alt="DARK" className="card__img" />
        <div className="card__info">
          <span className="card__category"></span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} target="_blank"> <button>Watch Now</button> </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
