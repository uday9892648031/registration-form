import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from '../components/Details';
import UserForm from '../components/UserForm';


const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={UserForm} path="/" exact={true} />
        <Route component={Details} path="/details" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
