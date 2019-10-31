import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Login {...props}  />
              )}
            />
            <Route
              path="/dashboard"
              render={props => (
                <Dashboard {...props} />
              )}
            />
          </Switch>
          <ToastContainer
            position={toast.POSITION.TOP_RIGHT}
            autoClose={5000}
          />
        </React.Fragment>
      </div>
    </HashRouter>
  );
}

export default App;
