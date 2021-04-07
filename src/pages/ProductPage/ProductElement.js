import styled from 'styled-components';

export const ProductContainer = styled.div`
   {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
   {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Card = styled.img`
  {
  height: auto;
  width: 40%;
  min-width:320px;
  margin: 1rem;
  border-radius: 2rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.019);
    box-shadow: 10px 5px 5px rgba(0, 0, 255, .2);
  } 
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: auto;
  }
`;
export const Info = styled.div`
   {
    height: 80vh;
    flex: 1;
    margin: 0 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeadingProduct = styled.h2`
  width: fit-content;
  outline: none;
  font-size: clamp(2.5rem, 1.5vw, 2rem);
  color: black;
  cursor: default;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: red;
  }
`;
export const Description = styled.p`
{   
    color: black;
    cursor: default;
    align-self: flex-end;
    margin-right: 3rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.7s ease-in-out;
    &:hover{
    color: red;
    transform: scale(1.2)
}`;
export const ProductInfo = styled(HeadingProduct)`
   {
    font-size: clamp(1rem, 2.5vw, 1rem);
    text-align: center;
    width: 80%;
    margin: 0 1rem;
    &:hover {
      color: red;
      transform: scale(1);
    }
  }
`;
export const Price = styled.p`
  color: black;
  cursor: default;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  transition: all 0.7s ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
export const ActionButton = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
}
`;
export const ButtonProduct = styled.button`
  width: 40%;
  min-width: 100px;
  padding: 0.5rem;
  border: none;
  margin: 0 0.5rem;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  font-size: clamp(1rem, 2.5vw, 1rem);
  transition: 0.2s ease-out;
  outline: none;
  &:hover {
    background: #ffc500;
    cursor: pointer;
    color: #000;
  }
`;
