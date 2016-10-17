/// <reference types="redux"/>

import { applyMiddleware } from 'redux';
import createDebounce from 'redux-debounced';

applyMiddleware(createDebounce());
