import React from "react";
import SongOverview from "./SongOverview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <SongOverview />
        </Route>
      </Switch>
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Hallo en welkom op mijn mooie songlist app</p>
  </div>
);

export default App;
