import { combineReducers, createStore, applyMiddleware, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { themeReducer } from './theme/reducer';

export const store = configureStore({
  reducer: themeReducer,
})