import "./App.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { ClientWorkPage } from "./pages/ClientWorkPage";
import { EventsPage } from "./pages/EventsPage";
import { HomePage } from "./pages/HomePage";
import { MerchPage } from "./pages/MerchPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/clientWork">
          <ClientWorkPage />
        </Route>
        <Route path="/merch">
          <MerchPage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
