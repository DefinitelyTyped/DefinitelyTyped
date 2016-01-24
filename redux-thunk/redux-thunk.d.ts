// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

import { Middleware, Dispatch } from 'redux';

declare module ReduxThunk {
    export interface Thunk extends Middleware {}
    export interface ThunkInterface {
        <T>(dispatch: Dispatch, getState?: () => T): any;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export = thunk;
}
