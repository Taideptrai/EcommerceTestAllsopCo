import React from 'react';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { GlobalStyle } from '../globalStyles';

const HomePage = () => (
  <div>
    <GlobalStyle />
    <Hero />
    <Products heading='Choose your favorite' />
    <Feature />
    <Footer />
  </div>
);

export default HomePage;
