import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from 'redux-toolkit'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore({
    reducer: counter
  })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
serviceWorker.register();
