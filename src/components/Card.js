import React from "react";

function Card(props) {
  return (
    <div className="card text-center mb-2  mt-5" >
      <img src={props.image} alt="" />
      <div className="card-body bg-dark text-light">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text text-secondary">{props.content}</p>
        <a href="#!" className="btn btn-secondary rounded-0">
          ir a este sitio
        </a>
      </div>
    </div>
  );
}

export default Card;
