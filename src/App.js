import React from "react"
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Switch>
     <Route exact={true} path="/">
    This is home page

    </Route>

    <Route exact={true} path="/starred">
    This is home starred

    </Route>
      </Switch>
  );
}

export default App;
