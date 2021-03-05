import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Forms from './components/Forms/forms'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Drinks from './components/Pages/Drinks'
import Team from './components/Pages/Team'
import Contact from './components/Pages/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/drinks" component={Drinks}/>
          <Route path="/team" component={Team}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
