import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import store from "./store";
import { Provider } from "react-redux";
import AddClients from "./components/clients/AddClient";
import ClientDetials from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { UserIsAuthenticated } from "./helpers/auth";
import { UserIsNotAuthenticated } from "./helpers/auth";
import Settings from "./components/settings/Settings";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClients)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientDetials)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/register"
                  component={UserIsNotAuthenticated(Register)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
