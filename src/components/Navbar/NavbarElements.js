import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  background: rgba(0, 0, 0, 0.7);
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  margin-left: 5px;
  color: #fff;
  font-size: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1.2rem;
  }
`;
export const Badge = styled.p`
  position: absolute;
  top: -3rem;
  right: -1.2rem;
  font-size: 1.2rem;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  margin: 0 15px;
`;
export const ShoppingCart = styled(FaShoppingCart)`
  font-size: 2rem;
  margin: 0 15px;
`;
