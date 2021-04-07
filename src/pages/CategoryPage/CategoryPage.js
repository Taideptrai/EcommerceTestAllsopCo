import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductItem from '../../components/Carousel/ProductItem';
import { GlobalState } from '../../DataProvider';
import {
  CategoryContainer,
  CategoryTitle,
  CategoryList,
} from './CategoryElement';
import { ButtonProduct } from '../ProductPage/ProductElement';

const CategoryPage = () => {
  const { category } = useParams();
  const history = useHistory();
  const state = useContext(GlobalState);
  const [data] = state.data;
  const [products, setProducts] = state.products;
  const addProductToCart = (productId) => {
    // check productId exits in cart, if yes will not add
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
    <CategoryContainer>
      <CategoryTitle>
        Category-
        {category}
      </CategoryTitle>
      <CategoryList>
        {data
          .filter((item) => item.category === category)
          .map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              addProductToCart={addProductToCart}
            />
          ))}
      </CategoryList>
      <ButtonProduct
        onClick={() => {
          history.push('/');
        }}
      >
        Back
      </ButtonProduct>
    </CategoryContainer>
  );
};

export default CategoryPage;
