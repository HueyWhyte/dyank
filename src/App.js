import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Booking from "./Pages/Booking";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/booking" component={Booking} />

        <Route exact path="/services" component={Services} />

        <Route exact path="/pricing" component={Pricing} />

        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
