import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import CartItemProduct from './CartItemProduct/CartItemProduct';
import {
  CartContainer,
  CartHeading,
  CartItemContainer,
  CartPriceTotal,
  TotalPrice,
  ButtonContainer,
  Button,
  Promotion,
  PromotionItems,
} from './CartElement';
import { GlobalState } from '../../DataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Cart = () => {
  const classes = useStyles();
  const [totalDrinkBuff, setTotalDrinkBuff] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const history = useHistory();
  const state = useContext(GlobalState);
  const [data, setData] = state.data;
  const [products, setProducts] = state.products;
  const [promo] = state.promotion;
  const setTotalPrice = state.price[1];
  const setTotalPriceWithPromo = state.priceWithPromo[1];
  let stateCheck = {};
  const TotalPriceCal = () => {
    let totalPrice = 0;
    products.map(
      (id) => (totalPrice += +(
        data[id - 1].price.substring(1) * data[id - 1].quantityInCart
      ))
    );
    return totalPrice.toFixed(2);
  };

  const TotalPriceCalWithPromo = () => {
    let totalPrice = TotalPriceCal();
    let totalPriceBaking = 0;
    products.forEach((item) => {
      if (data[item - 1].category === 'Baking/Cooking Ingredients') {
        totalPriceBaking
          += +data[item - 1].quantityInCart * +data[item - 1].price.substring(1);
      }
    });
    if (totalPrice > 100 && promoCode === '20OFFPROMO') {
      totalPrice -= 20;
      stateCheck = { ...stateCheck, 2: true };
    } // check total first , incase price - baking < 100
    if (totalPriceBaking > 50) {
      totalPrice -= 5;
      stateCheck = { ...stateCheck, 1: true };
    }
    if (totalDrinkBuff > 9) {
      totalPrice = (totalPrice - totalPrice * 0.1).toFixed(2);
      stateCheck = { ...stateCheck, 0: true };
    }
    return totalPrice;
  };
  const ClearCart = () => {
    setProducts([]); // remove all products has choosen
    const newData = data.slice(0); // set Quantity in Cart all item = 1
    newData.map((item) => (item.quantityInCart = 1));
    setData(newData);
  };
  /* const handleChange = (e) => {
        let {name, checked} = e.target;
        let checkState = Object.assign({}, check);
        checkState[name] = checked;
        setCheck(checkState);
        updateQuantityDrinkBuff();
    }; */
  const updateQuantityDrinkBuff = () => {
    // calculate total drink buff
    let totalDrinkBuffQuantity = 0;
    products.forEach((item) => {
      // check products selected have any drink, if have, calculate total Drink Quantity
      if (data[item - 1].category === 'Drinks') {
        totalDrinkBuffQuantity += data[item - 1].quantityInCart;
      }
    });
    setTotalDrinkBuff(totalDrinkBuffQuantity); // set Total Drink to State
  };
  const handleCheckOut = () => {
    const totalPrice = TotalPriceCal();
    const totalPriceWithPromo = TotalPriceCalWithPromo();
    setTotalPrice(totalPrice);
    setTotalPriceWithPromo(totalPriceWithPromo);
    history.push('/checkout');
  };
  const handleInputPromoCode = (e) => {
    setPromoCode(e.target.value);
  };
  const totalPriceCal = TotalPriceCal();
  const totalPriceCallWithPromo = TotalPriceCalWithPromo();
  useEffect(() => {
    updateQuantityDrinkBuff();
  });
  return (
    <CartContainer>
      <CartHeading>Your Cart</CartHeading>
      {products.length === 0 ? (
        <CartItemContainer direction='column'>
          <h1>Cart Empty</h1>
          <Button
            onClick={() => {
              history.push('/');
            }}
          >
            Back
          </Button>
        </CartItemContainer>
      ) : (
        <>
          <CartItemContainer>
            {products.map((id) => (
              <CartItemProduct
                handleUpdateDrink={updateQuantityDrinkBuff}
                key={id - 1}
                totalData={data}
                setData={setData}
                data={data[id - 1]}
              />
            ))}
          </CartItemContainer>
          <CartPriceTotal>
            <Promotion>
              <CartHeading>Promotions</CartHeading>
              {promo.map((item, index) => (
                <PromotionItems key={index}>
                  {stateCheck[index] === true && <BsCheck />}
                  <label htmlFor={item._id}>{item.title}</label>
                </PromotionItems>
              ))}
              <form className={classes.root} noValidate autoComplete='off'>
                <Input
                  onChange={handleInputPromoCode}
                  placeholder='Promo Code'
                  inputProps={{ 'aria-label': 'description' }}
                />
              </form>
            </Promotion>
            <TotalPrice>
              Total Price : Before: $
              {totalPriceCal}
              {' '}
              - After:$
              {totalPriceCallWithPromo}
            </TotalPrice>
            <ButtonContainer>
              <Button
                onClick={() => {
                  history.push('/');
                }}
              >
                Back
              </Button>
              <Button onClick={ClearCart}>Clear Cart</Button>
              <Button onClick={handleCheckOut}>Check Out</Button>
            </ButtonContainer>
          </CartPriceTotal>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
