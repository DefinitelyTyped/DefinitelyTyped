// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module "redux-thunk" {
    import { Middleware, Dispatch } from 'redux';

    export interface Thunk extends Middleware { }

    export interface ThunkInterface {
        <T>(dispatch: Dispatch, getState?: () => T): any;
    }

    var thunk: Thunk;

    export default thunk;
}

