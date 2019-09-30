import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MainView from './views/main';


const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={MainView} />
    </Router>
  );
}

export default App;
