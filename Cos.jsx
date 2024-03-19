import './App.css';
import React, { useState } from 'react';

function Cos() {
  const [cartItems, setCartItems] = useState([]);
  const [position, setPosition] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const moveSlideshow = () => {
    setPosition(prevPosition => prevPosition - 1);
    const slideshow = document.querySelector('.slideshow');
    if (position <= -slideshow.clientWidth) {
      setPosition(0);
    }
  };

  setInterval(moveSlideshow, 50);

  return (
    <>
      <div className="cart-items"></div>
      <div className="cart-total"></div>

      <button className="clear-cart" onClick={() => setCartItems([])}>Golește coșul</button>

      <div className="slideshow">
        {/* Slideshow content goes here */}
      </div>

      {cartItems.map(item => (
        <div key={item.id}>
          <span>{item.name} - {item.price} lei</span>
          <button onClick={() => removeFromCart(item.id)}>Șterge</button>
        </div>
      ))}

      {/* Example button for adding items to the cart */}
      <button className="add-to-cart" onClick={() => addToCart({ id: 1, name: 'Product', price: 10 })}>Adaugă în coș</button>
    </>
  );
}

export default Cos;
