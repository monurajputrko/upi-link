import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import LinkExtractor from "./Components/Link";
import {Form} from "./Components/Form";

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/pay" component={LinkExtractor} />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
