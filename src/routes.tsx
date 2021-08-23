import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import CategoryList from './pages/Categories';
import DrinkDetails from 'pages/DrinkDetails';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/categories" component={CategoryList} />
    <Route exact path="/drink/:id" component={DrinkDetails} />
  </BrowserRouter>
);

export default Routes;
