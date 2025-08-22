import React from "react";
import "./Na.css";
import { Link } from "react-router-dom";

const Na = (props) => {
  return (
    <div className="box">
      <Link to={`/products/${props.id}`}><img src={props.image} alt={props.name} /></Link>
      <h5>{props.name}</h5>
      <hr/>
      <span>{props.title}</span>
      <h3>₹{props.price}</h3>
    </div>
  );
};

export default Na;