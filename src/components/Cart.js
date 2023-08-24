import React from 'react'


function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div>
        <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Cart