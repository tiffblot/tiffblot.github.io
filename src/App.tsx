import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { DownloadsPage } from "./pages/DownloadsPage";
import { GraphicsPage } from "./pages/GraphicsPage";
import { HomePage } from "./pages/HomePage";

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
