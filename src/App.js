import React from "react"
import Navs from './components/Navs'
import {Switch,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Starred from "./pages/Starred"

function App() {
  return (
  <div>

    <Navs/>
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
  </div>
  );
}

export default App;
