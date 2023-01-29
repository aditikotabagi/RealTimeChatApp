import React from "react";
//import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  store  from './store/store';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import './index.css';
/**
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

);
**/
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();
