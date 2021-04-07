import React, { useContext } from 'react';
import uuid from 'react-uuid';
import { GlobalState } from '../../DataProvider';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  Line,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const state = useContext(GlobalState);
  const [category] = state.cate;
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Line>
        <p>Category</p>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </Line>
      <SidebarMenu>
        {category.map((item) => (
          <SidebarLink key={uuid()} to={`/category/${item}`}>
            {item}
          </SidebarLink>
        ))}
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
