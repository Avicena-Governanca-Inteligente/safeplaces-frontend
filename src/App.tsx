import React from "react";
import Login from "./components/Login";
import "./scss/ui.scss";

import { Router, Route, Redirect, Switch, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import PathEditor from "./components/PathEditor";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/settings/:action?" component={Settings} />
          <Route path="/:patient?/calendar/:action?" component={Calendar} />
          <Route path="/:patient?/:page?/:action?" component={PathEditor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
