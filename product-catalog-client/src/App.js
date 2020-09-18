import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Catalog from "../src/components/Catalog";
import Home from "./components/Home";
import ProductReview from "./components/ProductReview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/reviews/:id" component={ProductReview} />
      </Switch>
    </div>
  );
}

export default App;
