import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Articles from "./pages/home";
import Saved from "./pages/saved";
import Jumbotron from "./components/jumbotron";

const App = () => 
  <Router>
    <div>
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
