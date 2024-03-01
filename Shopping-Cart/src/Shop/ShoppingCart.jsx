// ShoppingCart.jsx
import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const addItemToCart = () => {
    if (itemName.trim() !== '' && itemQuantity > 0 && itemPrice > 0) {
      const newItem = {
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice
      };
      setItems([...items, newItem]);
      // Reset input fields
      setItemName('');
      setItemQuantity(0);
      setItemPrice(0);
    }
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Add Item</h3>
      <form>
        <label>
          Name:
          <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={itemQuantity} onChange={e => setItemQuantity(parseInt(e.target.value))} />
        </label>
        <label>
          Price:
          <input type="number" value={itemPrice} onChange={e => setItemPrice(parseFloat(e.target.value))} />
        </label>
        <button type="button" onClick={addItemToCart}>Add to Cart</button>
      </form>

      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td id="total" colSpan="3">Total:</td>
            <td>${calculateTotalPrice().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
