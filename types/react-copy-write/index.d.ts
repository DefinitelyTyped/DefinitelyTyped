// Type definitions for react-copy-write 0.7
// Project: https://github.com/aweary/react-copy-write
// Definitions by: Sam A. Horvath-Hunt <https://github.com/samhh>
//                 Dave Jeffery        <https://github.com/davej>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

// It'd be nice if this could somehow be improved! Perhaps we need variadic
// kinds plus infer keyword? Alternatively unions may solve our issue if we had
// the ability to restrict type widening.
type AnyDeepMemberOfState<T> = any;

type MutateFn<T> = (draft: T, state: Readonly<T>) => void;
type Mutator<T> = (mutator: MutateFn<T>) => void;

type SelectorFn<T> = (state: T) => AnyDeepMemberOfState<T>;

type RenderFn<T> = (...state: Array<Readonly<ReturnType<SelectorFn<T>>>>) => JSX.Element | JSX.Element[] | null;

interface ConsumerPropsBase<T> {
    select?: Array<SelectorFn<T>>;
}

interface ConsumerPropsExplicitRender<T> extends ConsumerPropsBase<T> {
    render?: RenderFn<T>;
}

interface ConsumerPropsImplicitRender<T> extends ConsumerPropsBase<T> {
    children?: RenderFn<T>;
}

type ConsumerProps<T> = ConsumerPropsExplicitRender<T> | ConsumerPropsImplicitRender<T>;

declare class Consumer<T> extends Component<ConsumerProps<T>> {}

interface ProviderProps<T> {
    children: JSX.Element | JSX.Element[];
    initialState?: Partial<T>;
}

declare class Provider<T> extends Component<ProviderProps<T>> {}

declare function create<T extends object>(state: T): {
    Provider: new() => Provider<T>,
    Consumer: new() => Consumer<T>,
    createSelector: SelectorFn<T>,
    mutate: Mutator<T>,
};

export default create;
