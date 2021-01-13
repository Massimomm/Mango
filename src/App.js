import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Range from "./pages/Range";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h2 className="App-link">Mango Range Controls</h2>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Link to="/range/normal">
                <Button variant="contained" color="primary">
                  <span>Exercise 1</span>
                </Button>
              </Link>
            </div>
            <div style={{ marginLeft: 36, marginBottom: 24 }}>
              <Link to="/range/fixed">
                <Button variant="contained" color="secondary">
                  <span>Exercise 2</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <div>
          <Switch>
            <Route path="/Range/:mode" component={Range} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
