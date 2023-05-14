import './Home.css';
import HomeHero from '../assets/home-image.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="home-container wrapper">
      <h1 className="home-header">Explore the best online store!</h1>
      <div className="home-content wrapper">
        <div className="home-copy">
          <h2 className="home-subtitle">Find everything you need!</h2>
          <p>
            We have the latest fashion trends with the new clothes, jewellery
            and technologies
          </p>
        </div>

        <img
          src={HomeHero}
          alt="woman sitting on the phone on the couch"
          className="home-hero-img"
        />

        <Link to="/products" className="home-btn">
          Shop Now!
        </Link>
      </div>
    </section>
  );
};
