import React, { createContext } from "react";
import mjeans from "../pages/jeans/mjeans";     
import Wtops from "../pages/tshirts&top/Wtops";
export const Shopcontext=createContext(null);

const ShopcontextProvider=(props)=>{
    const contextValue={mjeans,Wtops};

    return (
        <Shopcontext.Provider value = {contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )

}

export default ShopcontextProvider; 