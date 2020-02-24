import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import ProductsList from "./components/products/ProductsList";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  return (
    <div>
      <Router className="App">
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={ProductsList} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
