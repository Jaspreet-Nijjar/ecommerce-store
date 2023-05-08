import './ShoppingCart.css';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart } = useShoppingCart();

  console.log(isOpen);

  return (
    <>
      <section className={`cart-wrapper && ${isOpen && 'openCart'}`}>
        <h1>Your Shopping Cart</h1>
        {/*Where the product will be*/}
        <h3>Total:</h3>

        <div className="cart-buttons">
          <button>Checkout</button>
          <button onClick={closeCart}>Close</button>
        </div>
      </section>
    </>
  );
};
