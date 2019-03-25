import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllCandies from './AllCandies';
import Home from './Home';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link to="/">Home</Link>
          <Link to="/candies">Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
        </main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
