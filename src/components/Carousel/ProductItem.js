import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductButton,
} from '../Products/ProductsElements';

const ProductItem = ({ product, addProductToCart }) => {
  const history = useHistory();
  const outQuantity = product.quantity === 0;
  return (
    <ProductCard>
      <ProductImg
        onClick={() => {
          history.push(`/products/${product._id}`);
        }}
        src={product.img}
        alt={product.alt}
      />
      <ProductInfo>
        <ProductTitle to={`/products/${product._id}`}>
          {product.name}
        </ProductTitle>
        <ProductPrice to={`/products/${product._id}`}>
          {product.price}
        </ProductPrice>
        {!outQuantity && (
          <ProductButton
            active={outQuantity}
            onClick={() => {
              addProductToCart(product._id, product.name);
            }}
          >
            {product.button}
          </ProductButton>
        )}
        {outQuantity && (
          <ProductButton active={outQuantity}>Sold out</ProductButton>
        )}
      </ProductInfo>
    </ProductCard>
  );
};

export default ProductItem;
