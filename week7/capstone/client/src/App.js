import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./components/pages/page1/";
import Page2 from "./components/pages/page2/";
import Page3 from "./components/pages/page3/";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path to={Page1} />
          <Route path to={Page2} />
          <Route path to={Page3} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
