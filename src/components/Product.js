import './Product.css';

export const Product = ({ product }) => {
  return (
    <div className="product-list">
      <div className="product-card">
        <img src={product.image} alt="products of accessories and clothing" />
        <p className="product-title">{product.title}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="product-btn">Add to cart</button>
      </div>
    </div>
  );
};
