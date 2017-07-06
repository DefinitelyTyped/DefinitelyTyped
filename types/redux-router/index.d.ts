// Type definitions for redux-router v1.0.0
// Project: https://github.com/rackt/redux-router
// Definitions by: Stepan Mikhaylyuk <http://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as Redux from 'redux';
import * as H from 'history';

import routerStateReducer from "./lib/routerStateReducer";
import ReduxRouter from "./lib/ReduxRouter";
import reduxReactRouter from "./lib/client";
import isActive from "./lib/isActive";
import {
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
} from "./lib/actionCreators";

export {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
    isActive,
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
};

