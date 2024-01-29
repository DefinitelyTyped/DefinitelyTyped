import * as React from "react";

export default function useCombinedReducers<T, A>(
    combinedReducers: Record<keyof T, [T[keyof T], React.Dispatch<A>]>,
): [T, (action: A) => void];
