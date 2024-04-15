import { Dispatch, ExoticComponent, ReactNode, SetStateAction } from "react";

type StateHook<S> = () => [S, Dispatch<SetStateAction<S>>];

type StoreUtils<Store extends { [K: string]: any }> =
    & Omit<
        {
            [K in keyof Store as `use${Capitalize<string & K>}`]: StateHook<Store[K]>;
        },
        "useStore"
    >
    & {
        Provider: ExoticComponent<{ children: ReactNode }>;
        useStore: StateHook<Store>;
    };

declare function createStore<Store extends { [K: string]: any }>(store: Store): StoreUtils<Store>;

export = createStore;
