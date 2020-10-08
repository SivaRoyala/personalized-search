import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MyDocuments from "./MyDocuments/MyDocuments";
import SubScriptionManagement from "./Subscription/SubScriptionManagement";
import Admin from "./Admin/Admin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">MY DOCUMENTS</Link>
            </li>
            <li>
              <Link to="/subscription">SUBSCRIPTION MANAGEMENT</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MyDocuments}></Route>
          <Route
            exact
            path="/subscription"
            component={SubScriptionManagement}
          ></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
