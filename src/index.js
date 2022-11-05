import React from 'react'
// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store/store'


window.store = store;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);