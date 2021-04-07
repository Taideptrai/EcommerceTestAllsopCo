import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';

import {
  CartContainer,
  CartImage,
  CartInfo,
  CartAction,
  QuantityPrice,
  Title,
  Info,
  RemoveButton,
} from './CartItemProductElement';
import { GlobalState } from '../../../DataProvider';

const CartItemProduct = ({
  handleUpdateDrink, totalData, data, setData
}) => {
  const history = useHistory();
  const state = useContext(GlobalState);
  const [products, setProducts] = state.products;
  const handleChangeQuantity = (type) => {
    let { quantityInCart, quantity } = data; // dataItem refer to totaldata
    if (type === 'plus') {
      if (quantityInCart < quantity) {
        quantityInCart += 1;
        data.quantityInCart = quantityInCart;
        const totalDataArr = [...totalData];
        setData(totalDataArr); // set to render again/
        handleUpdateDrink();
      }
    }
    if (type === 'minus') {
      if (quantityInCart > 0) {
        quantityInCart -= 1;
        data.quantityInCart = quantityInCart;
        const totalDataArr = [...totalData];
        setData(totalDataArr); // set to render again/
        handleUpdateDrink();
      }
    }
  };
  const handleRemoveItem = () => {
    const updateProducts = [...products.filter((item) => item !== data._id)];
    setProducts(updateProducts);
    totalData[data._id - 1].quantityInCart = 1;
    setData(totalData);
    handleUpdateDrink();
  };
  const handleCalculatePrice = () => {
    const { price, quantityInCart } = data;
    const newPrice = +price.substring(1) * quantityInCart;
    return `$${newPrice.toFixed(2)}`;
  };

  return (
    <CartContainer>
      <CartImage src={data.img} alt={data.alt} />
      <CartInfo
        onClick={() => {
          history.push(`/products/${data._id}`);
        }}
      >
        {data.name}
      </CartInfo>
      <CartAction>
        <QuantityPrice>
          <Title>Quantity</Title>
          <Info>
            <FaMinus
              onClick={() => {
                handleChangeQuantity('minus');
              }}
            />
            <span>{data.quantityInCart}</span>
            <FaPlus
              onClick={() => {
                handleChangeQuantity('plus');
              }}
            />
          </Info>
        </QuantityPrice>
        <QuantityPrice>
          <Title>Price</Title>
          <Info>{handleCalculatePrice()}</Info>
        </QuantityPrice>
        <RemoveButton onClick={handleRemoveItem}>Remove</RemoveButton>
      </CartAction>
    </CartContainer>
  );
};

export default CartItemProduct;
