import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <i class="fa-solid fa-cart-shopping"></i>
    </nav>
  );
};
