import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../components/Navbar/Navbar.css";
import Mslide from "../components/Mslide";
import Breadcrums from "../components/breadcrums/Breadcrums";
import mna from "./new arrivals/mna";
import Na from "../components/na/Na";
import Mt from "../components/na/Mt";
import "./mens.css";
import mtshirts from "./tshirts&top/mtshirts";
import mjeans from "./jeans/mjeans";
import { Shopcontext } from "../context/Shopcontext";

const Mens = () => {
  const { mjeans } = useContext(Shopcontext);

  return (
    <div className="popular">
      <Mslide />
      <h2>NEW ARRIVALS</h2>
      <div className="naproducts">
        {mna.map((item, i) => (
          <Na
            key={i}
            id={item.id}
            name={item.name}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <h2>T-SHIRTS</h2>
      <div className="mensproducts">
        {mtshirts.map((item, i) => (
          <Mt
            key={i}
            id={item.id}
            name={item.name}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <h2>BOTTOMS</h2>
      <div className="mensjeans">
        {mjeans.map((item, i) => (
          <Mt
            key={i}
            id={item.id}
            name={item.name}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Mens;