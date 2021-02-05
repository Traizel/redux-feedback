import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Home from './Home/Home';
import Qone from '../Questions/Qone';
import Qtwo from '../Questions/Qtwo';
import Qthree from '../Questions/Qthree';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div>
    <Header />
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/1" component={Qone} />
          <Route path="/2" component={Qtwo} />
          <Route path="/3" component={Qthree} />
          {/*<Route path="/4" component={Comments} />*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
