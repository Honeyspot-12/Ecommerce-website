import React, { useContext } from "react";
import { Wishlistcontext } from "../context/Wishlistcontext";
import "./Wishlist.css";

const Wishlist = () => {
    const { wishlist, dispatch } = useContext(Wishlistcontext)

    if (wishlist.length === 0) {
        return <h2>YOUR WISHLIST IS EMPTY</h2>;
    }

    return (
        <div className="wishlist-container">
            <h1>YOUR WISHLIST</h1>
            {wishlist.map((item) => (
                <div className="wishlist-item" key={item.id}>
                    <img src={item.image} alt={item.image} />
                    <div className="wishlist-item-info">
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                        
                        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Wishlist;