import React from "react"
import {Switch,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Starred from "./pages/Starred"

function App() {
  return (
    <Switch>
     <Route exact={true} path="/">
    <Home/>

    </Route>

    <Route exact={true} path="/starred">
    <Starred/>

    </Route>

    <Route>
      <div>
        not found
        </div>
    </Route>
      </Switch>
  );
}

export default App;
