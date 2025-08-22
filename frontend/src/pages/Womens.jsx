import Wslide from "../components/Wslide";
import "../components/Navbar/Navbar.css";
import React, { useContext } from "react";
import wna from "./new arrivals/wna";
import Na from "../components/na/Na";
import Wt from "../components/na/Wt";
import Wtops from "./tshirts&top/Wtops";
import wjeans from "./jeans/wjeans";
import { Shopcontext } from "../context/Shopcontext";
import Breadcrums from "../components/breadcrums/Breadcrums";
import "./Womens.css";

const Womens = () => {
  const { Wtops } = useContext(Shopcontext);
  return (
      <div className="popular">
      <Wslide />
      <h2>NEW ARRIVALS</h2>
      <div className="naproducts">
        {wna.map((item, i) => {
          return (
            <Na
              key={i}
              id={item.id}
              name={item.name}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
      {/* Tops */}
      <h2>TOPS</h2>
      <div className="womensproducts">
        {Wtops.map((item,i)=>{
          return(
            <Wt 
            key={i}
            id={item.id}
            name={item.name}
            title={item.title}
            image={item.image}
            price={item.price}
            />
          )
        })}
      </div>
      {/* BOttoms */}
      <h2>BOTTOMS</h2>
      <div className="womensjeans">
        {wjeans.map((item,i)=>{
          return(
            <Wt
            key={i}
            id={item.id}
            name={item.name}
            title={item.title}
            image={item.image}
            price={item.price}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Womens;
