import React from 'react'

 function Cart({cart}) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart
