import './CartItem.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useFetch } from '../hooks/useFetch';

export const CartItem = ({ id, quantity }) => {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const { products } = useFetch('https://fakestoreapi.com/products');

  const product = products.find((product) => product.id == id);
  if (product == null) return null;

  return (
    <section className="cart-item-container">
      <img src={product.image} className="cart-item-image" />

      <div className="items-details">
        <h3 className="cart-item-title">
          {product.title.length <= 14
            ? product.title
            : product.title.substr(0, 14) + '...'}
        </h3>
        <p className="cart-item-price">
          ${(product.price * quantity).toFixed(2)}
        </p>

        <div className="item-quantity">
          <button onClick={() => decreaseCartQuantity(product.id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => increaseCartQuantity(product.id)}>+</button>
        </div>
      </div>
    </section>
  );
};
