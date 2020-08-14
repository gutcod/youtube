import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import { LinksPage } from "./pages/Link/Link";
import { AuthPage } from "./pages/Auth/AuthPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/link" exact>
          <LinksPage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
