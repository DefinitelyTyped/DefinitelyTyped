// Type definitions for redux-immutable v3.0.5
// Project: https://github.com/gajus/redux-immutable
// Definitions by: Pedro Pereira <https://github.com/oizie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module "redux-immutable" {
    export function combineReducers(reducers: Object): Redux.Reducer<any>;
}
