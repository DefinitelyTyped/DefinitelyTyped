// Type definitions for use-combined-reducers 1.0
// Project: https://github.com/the-road-to-learn-react/use-combined-reducers#readme
// Definitions by: kwdowik <https://github.com/kwdowik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default function useCombinedReducers<T, A>(combinedReducers: Record<keyof T, [T[keyof T], React.Dispatch<A>]>): [T, (action: A) => void];
