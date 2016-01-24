// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module ReduxThunk {
    import { Middleware, Dispatch } from 'redux';
    export interface Thunk extends Middleware {};
    export interface ThunkInterface {
        <T>(dispatch: Dispatch, getState?: () => T): any;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export = thunk;
}
