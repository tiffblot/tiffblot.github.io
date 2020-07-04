import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { GraphicsPage } from "./pages/GraphicsPage";
import { DownloadsPage } from "./pages/DownloadsPage";
import { AboutPage } from "./pages/AboutPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/graphics">
          <GraphicsPage />
        </Route>
        <Route path="/downloads">
          <DownloadsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
