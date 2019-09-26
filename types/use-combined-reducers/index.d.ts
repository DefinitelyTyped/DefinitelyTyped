// Type definitions for use-combined-reducers 1.0
// Project: https://github.com/the-road-to-learn-react/use-combined-reducers
// Definitions by: Kacper Wdowik https://github.com/kwdowik/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'React';

declare module "use-combined-reducers" {
    function useCombinedReducers<T, A>(combinedReducers: Record<keyof T, [T[keyof T], React.Dispatch<A>]>): [T, (action: A) => void];

    export default useCombinedReducers;
}

