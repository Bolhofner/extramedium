import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <><Header />
    <div>
    <Switch>
      <Route path="/#/settings">
        <Settings />
      </Route>
      <Route path="/#/register">
        <Login />
      </Route>
      <Route path="/#/">
        <Home />
      </Route>
    </Switch>
  </div>
  <Footer /></>
  );
}

export default App;
