import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Add Some Products</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxx</h3>
        <p>
          <small>Thanks For giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
