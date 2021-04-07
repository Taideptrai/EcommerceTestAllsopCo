import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound/NotFound';
import DataProvider from './DataProvider';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CheckOut from './pages/Checkout/CheckOut';

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:id" exact component={ProductPage} />
          <Route path="/category/:category" exact component={CategoryPage} />
          <Route path="/checkout" exact component={CheckOut} />
          <Route path="/*" exact component={NotFound} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
