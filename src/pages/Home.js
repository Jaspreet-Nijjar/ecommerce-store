import './Home.css';
import HomeHero from '../assets/home-image.jpg';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Home = () => {
  const { products } = useFetch('https://fakestoreapi.com/products?limit=4');

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
      </div>

      <div className="home-link">
        <Link to="/products" className="home-btn">
          Shop Now!
        </Link>
      </div>

      <div className="home-products">
        <h3>Featured Products</h3>

        <div className="product-container">
          {products.map((product) => (
            <div className="product-content">
              <img
                src={product.image}
                alt="an image of a product"
                className="home-product-img"
              />
              <p className="product-title">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
