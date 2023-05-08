import './ShoppingCart.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { useFetch } from '../hooks/useFetch';

export const ShoppingCart = ({ isOpen, id }) => {
  const { closeCart, cartItems } = useShoppingCart();

  const { products } = useFetch('https://fakestoreapi.com/products');

  return (
    <section className={`cart-wrapper && ${isOpen && 'openCart'}`}>
      <h1>Your Shopping Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <h3>
        Total: $
        {cartItems
          .reduce((total, cartItem) => {
            const product = products.find(
              (product) => product.id == cartItem.id
            );

            return total + (product?.price || 0) * cartItem.quantity;
          }, 0)
          .toFixed(2)}
      </h3>

      <div className="cart-buttons">
        <button>Checkout</button>
        <button onClick={closeCart}>Close</button>
      </div>
    </section>
  );
};
