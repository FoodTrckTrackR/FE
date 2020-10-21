import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';

//importing redux provider
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'
//importing our createStore & reducer
import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger'
import { reducer } from './reducer/index';
//creating store which calls the reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
            <Router>
                <App />
            </Router>
    </Provider>, rootElement)
