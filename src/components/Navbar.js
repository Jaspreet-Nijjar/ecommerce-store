import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

      <div className="navbar-cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <div className="cart-items-number">3</div>
      </div>
    </nav>
  );
};
