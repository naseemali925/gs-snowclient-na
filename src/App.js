import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </React.Fragment>
      </div>
    </HashRouter>
  );
}

export default App;
