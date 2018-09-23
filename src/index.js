import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {gitCheatReducer} from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(gitCheatReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
