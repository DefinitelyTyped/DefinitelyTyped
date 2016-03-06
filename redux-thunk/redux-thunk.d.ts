// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module ReduxThunk {
    export interface Thunk extends Redux.Middleware {}
    export interface ThunkInterface {
      <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export = thunk;
}
