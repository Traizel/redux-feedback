import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Home from './Home/Home';
import Qone from '../Questions/Qone';
import Qtwo from '../Questions/Qtwo';
import Qthree from '../Questions/Qthree';
import Comments from '../Questions/Comments';
import Review from '../ReviewPage/ReviewPage';
import Submit from '../SubmitPage/SubmitPage';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function App() {

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #111344 30%, #52154E 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#DAE0F2',
      height: 48,
      padding: '0 30px',
    },
  });

  const classes = useStyles();
  console.log(classes);

  return (
    <div>
    <Header />
      <Router>
        <div>
          <Route exact path="/" render={(props) => (
            <Home {...props} classes={classes} />
          )}/>
          <Route path="/1" render={(props) => (
            <Qone {...props} classes={classes} />
          )}/>
          <Route path="/2" render={(props) => (
            <Qtwo {...props} classes={classes} />
          )}/>
          <Route path="/3" render={(props) => (
            <Qthree {...props} classes={classes} />
          )}/>
          <Route path="/4" render={(props) => (
            <Comments {...props} classes={classes} />
          )}/>
          <Route path="/5" render={(props) => (
            <Review {...props} classes={classes} />
          )}/>
          <Route path="/6" render={(props) => (
            <Submit {...props} classes={classes} />
          )}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
