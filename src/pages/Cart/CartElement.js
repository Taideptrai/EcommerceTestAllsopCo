import styled from 'styled-components';

export const CartContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const CartHeading = styled.p`
  font-size: clamp(2rem, 10vw, 2rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  cursor: default;
`;
export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const CartPriceTotal = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const TotalPrice = styled.div`
  width: 50%;
  min-width: 320px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  letter-spacing: 2px;
`;
export const ButtonContainer = styled.div`
  width: 30%;
  min-width: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const Button = styled.button`
  font-size: 0.8rem;
  width: 30%;
  padding: 0.5rem 0.5rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  outline: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const Promotion = styled.div`
  width: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 10px;
`;
export const PromotionItems = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
