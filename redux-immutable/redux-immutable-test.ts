/// <reference path="redux-immutable.d.ts" />

import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

combineReducers({
   routing: routerReducer
});