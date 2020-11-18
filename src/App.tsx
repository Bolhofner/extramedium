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
import Article from './components/Article';


function App() {
  return (
    <main><Header />
    <div>
    <Switch>
      <Route path="/#/" exact ><Home /></Route>
      <Route path="/#/settings" ><Settings /></Route>
      <Route path="/#/article" ><Article /></Route>
      <Route path="/#/register" ><Login /></Route>
      <Route>Oops, looks like you got lost.</Route>
    </Switch>
  </div>
  <Footer /></main>
  );
}

export default App;
