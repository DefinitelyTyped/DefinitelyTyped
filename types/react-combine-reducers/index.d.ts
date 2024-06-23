import { Reducer, ReducerState } from "react";

declare function combineReducers<R extends Reducer<any, any>>(
    reducers: {
        [K in keyof ReducerState<R>]: [Reducer<ReducerState<R>[K], any>, ReducerState<R>[K]];
    },
): [R, ReducerState<R>];
export = combineReducers;
