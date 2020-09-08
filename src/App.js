import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Mid from "./components/mid";
import Footer from "./components/Footer";
import Question from "./components/question";
import SkillStack from "./components/SkillStack";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import notfound from "./components/notfound";
import Contact from "./components/Contact";
import Song from "./components/Song";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Title />

          <SkillStack />
          <Mid />
          <h1 class="font-weight-bold text-dark py-5 text-center">
            Got questions?
          </h1>
          <Question />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/song">
          <Song />
        </Route>
        <Route component={notfound} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
