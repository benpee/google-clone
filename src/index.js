import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';
import { GoogleContextProvider } from './context/state-context';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
    <GoogleContextProvider initialState={initialState} reducer={reducer}>
        <App />
    </GoogleContextProvider>,
    document.getElementById("root")
);