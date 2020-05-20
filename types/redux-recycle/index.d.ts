// Type definitions for redux-recycle 1.2
// Project: https://github.com/omnidan/redux-recycle
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Reducer } from "redux";

export default function recycleState<A> (reducer: Reducer<A>, actions: string[], initialState?: A | Reducer<A>): Reducer<A>;

