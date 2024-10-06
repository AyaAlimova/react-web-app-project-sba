import React from 'react'

 function Cart({cart}) {

  const totalPrice = cart.reduce((sum, item) => sum +item.price, 0)
  return (
    <>
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
       <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
       </>
      )}
    </div>
    </>
  );
}

export default Cart
