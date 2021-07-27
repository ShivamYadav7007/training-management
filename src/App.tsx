import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { me } from "./APIs/Auth/auth";
import { loginToken, LS_LOGIN_TOKEN } from "./Constants/constants";
import { User } from "./Models/User";
import AuthPages from "./Pages/Auth.page";
import LandingPage from "./Pages/Landing.page";
import MainDisplayPage from "./Pages/MainDisplay.page";

interface Props {}

const App: React.FC<Props> = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!loginToken) return;

    me().then((response) => setUser(response));
  }, []);

  return (
    <div className="bg-body">
      <Router>
        <Switch>
          <Route exact path="/">
            {localStorage.getItem(LS_LOGIN_TOKEN) ? (
              <Redirect to="/dashboard" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path={["/login", "/signup"]}>
            <AuthPages />
          </Route>
          <Route
            exact
            path={[
              "/dashboard",
              "/batch/:batchNumber/recording/:recordingNumber",
              "/movie-group",
              "/movie-group-button",
              "/groups",
              "/groups/button",
            ]}
          >
            <MainDisplayPage data={user} />
          </Route>
          <Route path="/">Page Not Found 404 Error</Route>
        </Switch>
      </Router>
    </div>
  );
};

App.defaultProps = {};

export default React.memo(App);
