import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HabitTracker from './components/HabitTracker';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HabitTracker} />
      </Switch>
    </Router>
  );
}

export default App;