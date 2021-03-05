import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Avengers from "./components/pages/avengers/Avengers";
import Dc from "./components/pages/dc_heroes/Dc";
import Heroes from "./components/pages/heroes/Heroes"
// import Footer from "./components/footer/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {<Redirect to="/avengers" />}
          </Route>
          <Route path="/dc" component={Dc} redirectTo="/" />
          <Route path="/avengers" component={Avengers} redirectTo="/" />
          <Route path="/heroes" component={Heroes} redirectTo="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
