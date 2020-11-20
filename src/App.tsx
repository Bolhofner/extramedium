import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const RouteContext = React.createContext("/");

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/register">
              <Login />
            </Route>
            <Route>Oops, looks like you got lost.</Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
