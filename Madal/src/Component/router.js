import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sigin from "./Sigin/Sigin";
import Register from "./Sigin/Register";
import Home from "./Home/index";
  const IndexRouter=()=>{
      return(
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Sigin/>
                      </Route>
                      <Route path="/home">
                          <Home/>
                      </Route>
                      <Route  path="/register">
                          <Register/>
                      </Route>
                  </Switch>
              </Router>
      )
  }

export default IndexRouter;