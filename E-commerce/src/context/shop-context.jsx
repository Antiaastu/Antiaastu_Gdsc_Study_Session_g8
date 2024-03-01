import React from 'react'
export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length;++i){
        cart[i]=0;
    }
    return cart;
}

export const ShopContentProvider= (props) => {
    const[cartItems, setCartItems]=useState();
    const addToCart=(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]+1}));
    }

    const removeToCart=(itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]-1}));
    }

    const contextValue={cartItems,addToCart,removeToCart}
    console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}