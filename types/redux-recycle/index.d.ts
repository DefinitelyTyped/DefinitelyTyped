import { Reducer } from "redux";

export default function recycleState<A>(
    reducer: Reducer<A>,
    actions: string[],
    initialState?: A | Reducer<A>,
): Reducer<A>;
