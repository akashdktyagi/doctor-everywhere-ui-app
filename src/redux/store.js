import { createStore, combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from './loginreducer';
import { rootReducer } from './rootreducer';

const store = configureStore({
    reducer: {
      root: rootReducer,
    },
});
  
  export default store;