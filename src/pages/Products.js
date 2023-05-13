import React, { useState, useEffect } from 'react';
import { Product } from '../components/Product';
import { useFetch } from '../hooks/useFetch';

export const Products = () => {
  const { products, loading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );

  return (
    <section className="products-container wrapper">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {products &&
        products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </section>
  );
};
