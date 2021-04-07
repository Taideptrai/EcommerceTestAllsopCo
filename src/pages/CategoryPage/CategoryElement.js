import styled from 'styled-components';

export const CategoryContainer = styled.div`
   {
    background-color: #0d0909;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CategoryTitle = styled.h3`
  width: fit-content;
  outline: none;
  font-size: clamp(2.5rem, 1.5vw, 2rem);
  color: yellow;
  cursor: default;
  transition: all 0.5s ease-in-out;
`;
export const CategoryList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 3rem;
`;
