import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  ProductContainer,
  Wrapper,
  Card,
  Info,
  HeadingProduct,
  Description,
  ProductInfo,
  Price,
  ActionButton,
  ButtonProduct,
} from './ProductElement';
import { GlobalState } from '../../DataProvider';

const ProductPage = () => {
  const history = useHistory();
  const state = useContext(GlobalState);
  const [data] = state.data;
  const [products, setProducts] = state.products;
  const { id } = useParams();
  const addProductToCart = (productId) => {
    // check productId exits in cart, if yes will not add in cart
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
    <ProductContainer>
      {data
        .filter((item) => item._id === +id)
        .map((item) => (
          <Wrapper key={item._id}>
            <Card src={item.img} alt={item.alt} />
            <Info>
              <HeadingProduct>{item.name}</HeadingProduct>
              <Description>{item.category}</Description>
              <ProductInfo>{item.desc}</ProductInfo>
              <Price>{item.price}</Price>
              <ActionButton>
                <ButtonProduct
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  Back
                </ButtonProduct>
                <ButtonProduct
                  onClick={() => {
                    alert('Add Successfull');
                    addProductToCart(item._id);
                  }}
                >
                  Add to Cart
                </ButtonProduct>
              </ActionButton>
            </Info>
          </Wrapper>
        ))}
    </ProductContainer>
  );
};

export default ProductPage;
