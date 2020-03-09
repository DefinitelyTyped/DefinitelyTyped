// Type definitions for redux-seamless-immutable 0.4
// Project: https://github.com/eadmundo/redux-seamless-immutable
// Definitions by: Leandro Soares <https://github.com/SoaresMG>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { Reducer, Action } from "redux";
import { Immutable } from "seamless-immutable";

export interface SeamlessReducers {
    [reducerName: string]: Reducer<any, any>;
}

export function combineReducers(reducers: SeamlessReducers): Reducer;
export function routerReducer<T extends Reducer>(state: T, action: Action): T;
export function stateTransformer<T>(state: Immutable<T>): T;
