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
    <main><Header />
    <div>
    <Switch>
      <Route path="/#/" component={Home} exact />
      <Route path="/#/settings" component={Settings} />
      <Route path="/#/register" component={Login} />
      <Route>Oops, looks like you got lost.</Route>
    </Switch>
  </div>
  <Footer /></main>
  );
}

export default App;
