/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppReducer from './Reducer/AppReducer';
import Props from './PropsChildren/Props';
import reportWebVitals from './reportWebVitals';
import Checkout from './LiftingUp/Checkout';
import DateCounter from './Reducer/DateCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
