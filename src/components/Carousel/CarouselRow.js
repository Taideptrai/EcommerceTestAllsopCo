import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductItem from './ProductItem';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselRow = ({ addProductToCart, data, cate }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Carousel breakPoints={breakPoints}>
    {data
      .filter((item) => item.category === cate)
      .map((product) => (
        <ProductItem
          addProductToCart={addProductToCart}
          product={product}
          key={product._id}
        />
      ))}
  </Carousel>
);

export default CarouselRow;
