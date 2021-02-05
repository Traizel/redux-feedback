import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    }, action) => {
    let newState = {...state};
    if (action.type === 'ADD_FEELING') {
        newState.feeling = action.payload.feeling;
        console.log(newState);
        return newState;
    } else if (action.type === 'ADD_UNDERSTANDING') {
        newState.understanding = action.payload.understanding;
        console.log(newState);
        return newState;
    } else if (action.type === 'ADD_SUPPORT') {
        newState.support = action.payload.support;
        console.log(newState);
        return newState;
    } else if (action.type === 'ADD_COMMENTS') {
        newState.comments = action.payload.comments;
        console.log(newState);
        return newState;
    }
    return state;
};


const storeInstance = createStore(
    combineReducers(
        {
            feedbackReducer,
        }
    ),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
