import { Collection } from "immutable";
import * as Redux from "redux";

export declare function combineReducers<S, T>(
    reducers: Redux.ReducersMapObject,
    getDefaultState?: () => Collection.Keyed<T, S>,
): Redux.Reducer<S>;
export declare function combineReducers<S>(
    reducers: Redux.ReducersMapObject,
    getDefaultState?: () => Collection.Indexed<S>,
): Redux.Reducer<S>;
