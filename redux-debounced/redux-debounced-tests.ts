/// <reference path="../redux/redux.d.ts"/>
/// <reference path="redux-debounced.d.ts"/>

import { applyMiddleware } from 'redux';
import createDebounce from 'redux-debounced';

applyMiddleware(createDebounce());
