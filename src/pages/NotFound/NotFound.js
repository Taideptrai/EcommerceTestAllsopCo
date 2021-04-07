import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer, Wrapper } from './NotFoundElement';
import { ProductButton } from '../../components/Products/ProductsElements';

const NotFound = () => (
  <NotFoundContainer>
    <Wrapper>
      <h1>404 - Not Found!</h1>
      <Link to='/'>
        <ProductButton>Go Home</ProductButton>
      </Link>
    </Wrapper>
  </NotFoundContainer>
);

export default NotFound;
