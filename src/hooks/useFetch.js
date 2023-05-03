import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [products, setProducts] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [url]);

  return { products, loading, error };
};
