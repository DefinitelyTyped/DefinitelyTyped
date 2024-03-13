import { Action, Reducer } from "redux";
import { Immutable } from "seamless-immutable";

export interface SeamlessReducers {
    [reducerName: string]: Reducer<any, any>;
}

export function combineReducers(reducers: SeamlessReducers): Reducer;
export function routerReducer<T extends Reducer>(state: T, action: Action): T;
export function stateTransformer<T>(state: Immutable<T>): T;
