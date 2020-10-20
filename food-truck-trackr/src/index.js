import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';

//importing redux provider
import { Provider } from 'react-redux';

// import 'bulma/css/bulma.css';
// import './styles.scss';

//importing our createStore & reducer
import { createStore } from 'redux';
import { reducer } from './reducer/index';
//creating store which calls the reducer
const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
            <Router>
                <App />
            </Router>
    </Provider>, rootElement)
