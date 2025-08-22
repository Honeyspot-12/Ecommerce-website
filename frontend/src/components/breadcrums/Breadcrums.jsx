import React from "react";
import "./Breadcrums.css";
import arrowright from "../../assets/arrowright.svg"; // Ensure this path is correct
import {Link} from "react-router-dom";

const Breadcrums = ({ breadcrumbs }) => {
  return (
    <div className="breadcrums">
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.link}>{crumb.label}</Link>
          {index < breadcrumbs.length - 1 && (
            <img src={arrowright} alt="Arrow" className="arrow-icon" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrums;