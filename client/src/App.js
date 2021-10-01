import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";
import AuthWrapper from "./AuthWrapper";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <ToDoList />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
