import React, { useContext } from 'react';
import CarouselRow from '../Carousel/CarouselRow';
import { GlobalState } from '../../DataProvider';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductsHeadingTop,
} from './ProductsElements';

const Products = ({ heading }) => {
  const state = useContext(GlobalState);
  const [data] = state.data;
  const [products, setProducts] = state.products;
  const [category] = state.cate;
  const addProductToCart = (productId, productName) => {
    // check productId exits in cart, if yes will not add
    alert(`Add successful item: ${productName} in Cart`);
    if (products.length === 0) {
      setProducts([productId]);
    } else {
      const check = products.includes(productId);
      if (!check) {
        setProducts([...products, productId]);
      }
    }
  };
  return (
    <ProductsContainer>
      <ProductsHeadingTop>{heading}</ProductsHeadingTop>
      {category.map((cate) => (
        <ProductWrapper key={cate}>
          <ProductsHeading>{cate}</ProductsHeading>
          <CarouselRow
            addProductToCart={addProductToCart}
            data={data}
            cate={cate}
          />
        </ProductWrapper>
      ))}
    </ProductsContainer>
  );
};

export default Products;
