import React, { useContext } from 'react';
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  ShoppingCart,
  Badge,
} from './NavbarElements';
import { GlobalState } from '../../DataProvider';

const Navbar = ({ toggle }) => {
  const state = useContext(GlobalState);
  const [products] = state.products;
  return (
    <>
      <Nav>
        <NavLink to='/'>B2B Food service</NavLink>
        <NavIcon>
          <NavLink to='/cart'>
            <ShoppingCart />
            <Badge>{products.length}</Badge>
          </NavLink>
          <Bars onClick={toggle} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
