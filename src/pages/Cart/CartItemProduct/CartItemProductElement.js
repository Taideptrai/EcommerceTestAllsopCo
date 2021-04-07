import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 15%;
    min-width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
    background: #f5f0e1;
    position: relative;
`;

export const CartImage = styled.img`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center; 
    align-items: center;
`;
export const CartInfo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align:center;
    flex-wrap: nowrap;
    font-size: 1rem;
    cursor: default;
    transition: all 0.5s ease-in-out;
    &:hover{
        color: red;
        transform: scale(1.09);
    }
    text-overflow: ellipsis;
    overflow: hidden; 
`;

export const CartAction = styled.div`
    width: 100%;
    height: 25%;
    display: flex;  
    justify-content: center; 
    align-items: center;
`;
export const QuantityPrice = styled.div`
    width: 50%;
    height:100%;
    display: flex;  
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
`;
export const Title = styled.div` 
    
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-wrap: no-wrap;
    overflow: hidden;
    cursor: default;    
    width: 100%;
    height:50%;
    border: none;
    font-size: 1rem;
`;
export const Info = styled.div`
    width: 100%;
    height: 50%;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    cursor: default;
`;
export const RemoveButton = styled.button`
position: absolute;
bottom: -20px;
font-size: 0.7rem;
padding: 0.5rem 0.5rem;
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
`;
