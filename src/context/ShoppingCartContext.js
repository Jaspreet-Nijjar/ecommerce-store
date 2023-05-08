import React, { createContext, useContext, useState } from 'react';
import { ShoppingCart } from '../components/ShoppingCart';

export const ShoppingCartContext = createContext();

//Custom Context Hook
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemQuantity = (id) => {
    return cartItems.find((product) => product.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((product) => product.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const cartQuantity = cartItems.reduce((acc, product) => {
    return product.quantity + acc;
  }, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
