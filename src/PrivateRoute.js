import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getAuth } from "./utils/Auth";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = getAuth("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
