import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainView from './views/main';
import TripsScreen from './components/TripsScreen';
import Heart from './components/Heart';
import TripWay from './components/TripWay';

import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={MainView} />
    </Router>
  );
}


export default App;
