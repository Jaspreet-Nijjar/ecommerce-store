import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

import './Navbar.css';

export const Navbar = () => {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

      <div className="navbar-cart">
        <i className="fa-solid fa-cart-shopping"></i>
        {cartQuantity !== 0 && (
          <div className="cart-items-number">{cartQuantity}</div>
        )}
      </div>
    </nav>
  );
};
