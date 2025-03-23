/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Appi from './ContextApi/Appi';
import AppReducer from './Reducer/AppReducer';
import Props from './PropsChildren/Props';
import reportWebVitals from './reportWebVitals';
import Checkout from './LiftingUp/Checkout';
import DateCounter from './Reducer/DateCounter';

import StateReducer from './Reducer/SamlesStateReducer/StateReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appi />

  </React.StrictMode>
);

reportWebVitals();
