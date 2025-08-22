import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 
import { Wishlistcontext } from "../context/Wishlistcontext";
import mjeans from "./jeans/mjeans"; 
import mtshirts from "./tshirts&top/mtshirts"; 
import Wtops from "./tshirts&top/Wtops"; 
import wjeans from "./jeans/wjeans"; 
import wna from "./new arrivals/wna"; 
import mna from "./new arrivals/mna"; 
import Breadcrums from "../components/breadcrums/Breadcrums"; 
import "./Product.css"; 

const Product = () => {
  const { id } = useParams(); 
  const { dispatch } = useContext(CartContext,Wishlistcontext); 
  
  const allProducts = [...mtshirts, ...mjeans, ...wjeans, ...Wtops, ...wna, ...mna];

  
  const product = allProducts.find((item) => item.id === parseInt(id));
  if (!product) {
    return <h2>Product not found</h2>; 
  }

 
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: product.category || "Category", link: `/products/${product.category}` },
    { label: product.name, link: `/products/${product.id}` },
  ];

 
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleAddTOWishlist=()=>{
    dispatch({type:"ADD_TO_WISHLIST", payload:product})
  }
  return (
    <div className="product-details">
      <Breadcrums breadcrumbs={breadcrumbs} />
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.title}</p>
        <hr />
        <h3>Price: ₹{product.price}</h3>
        <h4>Please select a size:</h4>
        <div className="sizes">
          {(product.sizes || []).map((size, index) => (
            <span key={index} className="size">
              {size}
            </span>
          ))}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          ADD TO CART
        </button>
        <button className="add-to-wishlist" onClick={handleAddTOWishlist}>ADD TO WISHLIST</button>
      </div>
    </div>
  );
};

export default Product;