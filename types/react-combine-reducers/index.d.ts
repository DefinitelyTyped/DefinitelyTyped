// Type definitions for react-combine-reducers 1.0
// Project: https://github.com/ankita1010/react-combine-reducers#readme
// Definitions by: Raphaël Léger <https://github.com/raphael-leger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1
import { Reducer, ReducerState } from 'react';

declare function combineReducers<R extends Reducer<any, any>>(
    reducers: {
        [K in keyof ReducerState<R>]: [Reducer<ReducerState<R>[K], any>, ReducerState<R>[K]];
    },
): [R, ReducerState<R>];
export = combineReducers;
