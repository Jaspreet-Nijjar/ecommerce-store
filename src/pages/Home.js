import './Home.css';
import HomeHero from '../assets/home-image.jpg';
import Electronics from '../assets/electronics.jpg';
import Jewellery from '../assets/jewellery.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="home-container wrapper">
      <div className="home-content wrapper">
        <h1>Explore the best online store!</h1>
        <img
          src={HomeHero}
          alt="woman sitting on the phone on the couch"
          className="home-hero-img"
        />
        <p>
          Find everything you need! Between{' '}
          <strong>clothing, jewellery and electronics</strong> - we have it all!
        </p>
        <Link to="/products" className="home-btn">
          Shop Now!
        </Link>
      </div>
    </section>
  );
};
