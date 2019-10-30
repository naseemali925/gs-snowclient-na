import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App(aprops) {
  return (
    <HashRouter basename="/">
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route path="/" exact render={(props) => <Login {...props} globalState={aprops.globalState} />} />
            <Route path="/dashboard" render={(props) => <Dashboard {...props} globalState={aprops.globalState} />} />
          </Switch>
          <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={5000} />
        </React.Fragment>
      </div>
    </HashRouter>
  );
}

export default App;
