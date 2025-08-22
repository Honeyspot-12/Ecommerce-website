import React, { createContext, useReducer } from "react";


export const CartContext = createContext();


const initialState = {
  cart: [],
};


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
       
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      const updatedState=state.cart.map(item=>{
        if(item.id===action.payload.id){
          if(item.quantity>1){
            return{
              ...item, quantity:item.quantity-1
            }
          }else{
            return null;
          }
        }
        return item;
      })

      return updatedState.filter(Boolean);

    default:
      return state;
  }
};

// Cart Context Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
