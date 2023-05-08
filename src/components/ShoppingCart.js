import './ShoppingCart.css';

export const ShoppingCart = () => {
  return (
    <section className="cart-wrapper">
      <h1>Your Shopping Cart</h1>
      {/*Where the product will be*/}
      <h3>Total:</h3>

      <div className="cart-buttons">
        <button>Checkout</button>
        <button>Close</button>
      </div>
    </section>
  );
};
