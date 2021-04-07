import React, { useState, createContext } from 'react';
import { productData, category, promotion } from './components/Products/data';

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(productData);
  const [cate, setCate] = useState(category);
  const [products, setProducts] = useState([]);
  const [promo, setPromo] = useState(promotion);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithPromo, setTotalPriceWithPromo] = useState(0);
  const state = {
    data: [data, setData],
    cate: [cate, setCate],
    products: [products, setProducts],
    promotion: [promo, setPromo],
    price: [totalPrice, setTotalPrice],
    priceWithPromo: [totalPriceWithPromo, setTotalPriceWithPromo],

  };
  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};

export default DataProvider;
