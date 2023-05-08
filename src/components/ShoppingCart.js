import './ShoppingCart.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { useFetch } from '../hooks/useFetch';

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <section className={`cart-wrapper && ${isOpen && 'openCart'}`}>
      <h1>Your Shopping Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="cart-buttons">
        <button>Checkout</button>
        <button onClick={closeCart}>Close</button>
      </div>
    </section>
  );
};
