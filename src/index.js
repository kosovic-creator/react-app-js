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
import AppRedux from './ReduxToolkit/AppRedux'; // Update the path to the correct location of AppRedux
import StateReducer from './Reducer/SamlesStateReducer/StateReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {

  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRedux />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
