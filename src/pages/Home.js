import './Home.css';
import HomeHero from '../assets/home-image.jpg';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { products } = useFetch('https://fakestoreapi.com/products?limit=6');

  return (
    <section className="home-container">
      <div className="home-hero">
        <img
          src={HomeHero}
          alt="woman scrolling on the phone on the couch"
          className="home-hero-image"
        />
      </div>
      <div className="home-content">
        <h1>Explore the best online store!</h1>
        <p>
          Find everything you need! Between clothing, jewellery and electronics
          - we have it all!
        </p>
        <div className="home-products-container"></div>
        <Link to="/products" className="home-btn">
          Shop Now!
        </Link>
      </div>
    </section>
  );
};
