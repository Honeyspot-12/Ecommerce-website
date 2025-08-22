import React, { createContext, useReducer } from "react";


export const Wishlistcontext = createContext();

const initialState = {
  wishlist: [],
};


const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.wishlist.find((item) => item.id === action.payload.id)) {
        return state; 
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};


export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  return (
    <Wishlistcontext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </Wishlistcontext.Provider>
  );
};