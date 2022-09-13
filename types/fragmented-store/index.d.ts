// Type definitions for fragmented-store 0.2
// Project: https://github.com/aralroca/fragmented-store
// Definitions by: Lunuy <https://github.com/lunuy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import {
    Dispatch,
    SetStateAction,
    ReactNode,
    ExoticComponent
} from 'react';

type StateHook<S> = () => [S, Dispatch<SetStateAction<S>>];

type StoreUtils<Store extends { [K: string]: any }> = Omit<{
    [K in keyof Store as `use${Capitalize<string & K>}`]: StateHook<Store[K]>
}, 'useStore'> & {
    Provider: ExoticComponent<{ children: ReactNode }>,
    useStore: StateHook<Store>
};

declare function createStore<Store extends { [K: string]: any }>(store: Store): StoreUtils<Store>;

export = createStore;
