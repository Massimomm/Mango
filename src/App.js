import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h2 className="App-link">Mango Range Controls</h2>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Link to="/exercise1">
                <Button variant="contained" color="primary">
                  <span>Exercise 1</span>
                </Button>
              </Link>
            </div>
            <div style={{ marginLeft: 36, marginBottom: 24 }}>
              <Link to="/exercise2">
                <Button variant="contained" color="secondary">
                  <span>Exercise 2</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <div>
          <Switch>
            <Route path="/Exercise1" component={Exercise1} />
            <Route path="/Exercise2" component={Exercise2} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
