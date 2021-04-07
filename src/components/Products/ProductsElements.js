import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  / width: 100vw; */
  min-height: 100vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1rem;
  margin-bottom: 1.5rem;
`;

export const ProductCard = styled.div`
  margin: 0 1rem;
  line-height: 2;
  min-width: 200px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.019);
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 1.7vw, 2rem);
  text-align: center;
  margin-bottom: 5rem;
  cursor: default;
`;
export const ProductsHeadingTop = styled(ProductsHeading)`
  border-bottom: 1px solid white;
  width: fit-content;
  font-size: clamp(2.5rem, 2.5vw, 3rem);
  text-align: center;
  margin: 5rem auto;
  cursor: default;
`;

export const ProductTitle = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 80px;
  overflow: hidden;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  transition: all 0.7s ease-in-out;
  &:hover{
    color: #fdc500;
    transform: scale(1.2)
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  transition: all 0.7s ease-in-out;
  &:hover{
    color: #fdc500;
    transform: scale(1.2)
  }
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 8px;
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
  ${({ active }) => active && `
    cursor: pointer;
    pointer-events: none;
    background-color: gray;
  `}
`;
