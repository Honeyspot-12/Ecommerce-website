import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"
import BuyButton from "./BuyButton";
import './BuyButton.css'

const Cart = () => {
  const { cart = [], dispatch } = useContext(CartContext);

const currentUser={_id: "68453e369ff90b467b5a785c"}
const userAddress="user Address"

  if (cart.length === 0) {
    return <h2>YOUR CART IS EMPTY</h2>;
  }
  const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0)

  const itemsWithProductId = cart.map(item => ({
    ...item,
    productId: item.productId || item.id // use id if productId is missing
  }));

  return (
    <div className="cart-container">
      <h1>YOUR CART</h1>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.image}/>
            <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: {id:item.id} })}>
              Remove
            </button>
            </div>
            
          </div>  
        ))}

        <BuyButton
          userId={currentUser._id}
          cartItems={itemsWithProductId}
          total={total}
          address={userAddress}
          />
    </div>
  );
};

export default Cart;