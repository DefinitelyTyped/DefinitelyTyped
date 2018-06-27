// Type definitions for react-copy-write 0.7
// Project: https://github.com/aweary/react-copy-write
// Definitions by: Sam A. Horvath-Hunt <https://github.com/samhh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from 'react';

interface ProviderProps {
    children: JSX.Element | JSX.Element[];
    initialState?: object;
}

declare class Provider extends Component<ProviderProps, any> {}

type MutateFn<T> = (draft: T) => void;
type Mutator<T> = (mutator: MutateFn<T>) => void;

// any instead of T due to selector
type RenderFn<T> = (state: any, mutate: MutateFn<T>) => JSX.Element | JSX.Element[];

interface ConsumerProps<T> {
    selector?: (state: T) => any;
    render?: RenderFn<T>;
    children?: RenderFn<T>;
}

declare class Consumer<T> extends Component<ConsumerProps<T>, any> {}

declare function create<T extends object>(state: T): {
    Provider: new() => Provider,
    Consumer: new() => Consumer<T>,
    mutate: Mutator<T>,
};

export default create;
