// Type definitions for redux-thunk
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module "redux-thunk" {
    import { Middleware, Dispatch } from 'redux';

    export interface Thunk<S> extends Middleware<S> { }

    export interface ThunkInterface {
        <S>(dispatch: Dispatch, getState?: () => S): any;
    }

    var thunk: Thunk<any>;

    export default thunk;
}
