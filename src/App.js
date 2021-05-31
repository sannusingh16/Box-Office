import React from "react";
import {Switch,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Starred from "./Pages/Starred"
import Show from "./Pages/Show"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Starred">
        <Starred />
      </Route>
      <Route exact path="/Show/:id">
        <Show />
      </Route>
    </Switch>
  )
}

export default App;
