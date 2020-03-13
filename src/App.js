import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
