import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Navbar2 from "./components/navbar2";
import Table from "./components/table";
import Test from "./components/Test";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import notfound from "./components/notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Test />
          <Navbar2 />
          <Table />
        </Route>
        <Route exact path="/Tile" component={Title} />

        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
