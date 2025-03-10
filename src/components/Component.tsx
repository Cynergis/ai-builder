import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;  

const Users = () => <h2>Users</h2>;

export default App;