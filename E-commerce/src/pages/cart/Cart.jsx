import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../Products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = () => {
    checkout();
    setCheckoutMessage(
      
    );
    setTimeout(() => {
      setCheckoutMessage("");
      navigate("/");
    }, 5000); // Clear message after 5 seconds and navigate to home
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={handleCheckout}> Checkout </button>
          {checkoutMessage && <p>{checkoutMessage}</p>} {/* Display checkout message */}
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
