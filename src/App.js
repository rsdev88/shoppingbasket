import React from 'react';
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Basket from "./pages/Basket"
import Photos from "./pages/Photos"

function App() {
  return (
    <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
