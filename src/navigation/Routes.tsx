import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PoliciesPage from "../pages/PoliciesPage/PoliciesPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/policies" component={PoliciesPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
