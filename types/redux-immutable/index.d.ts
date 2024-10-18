import { Collection, Record } from "immutable";
import { Action, Reducer, ReducersMapObject } from "redux";

export declare function combineReducers<S, A extends Action, T>(
    reducers: ReducersMapObject<S, A>,
    getDefaultState?: () => Collection.Keyed<T, S>,
): Reducer<S, A>;
export declare function combineReducers<S, A extends Action>(
    reducers: ReducersMapObject<S, A>,
    getDefaultState?: () => Collection.Indexed<S>,
): Reducer<S, A>;
export declare function combineReducers<S>(
    reducers: ReducersMapObject<S, any>,
    getDefaultState?: () => Collection.Indexed<S>,
): Reducer<S>;
export declare function combineReducers<S, T extends object>(
    reducers: ReducersMapObject<S, any>,
    getDefaultState?: Record.Factory<T>,
): Reducer<S>;
