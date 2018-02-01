import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Articles from "./pages/home/home.js";
import Saved from "./pages/saved/saved.js";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";

const App = () => 
  <Router>
    <div>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
