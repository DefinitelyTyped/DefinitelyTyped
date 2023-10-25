import { Component } from "react";

// It'd be nice if this could somehow be improved! Perhaps we need variadic
// kinds plus infer keyword? Alternatively unions may solve our issue if we had
// the ability to restrict type widening.
type AnyDeepMemberOfState<T> = any;

type MutateFn<T> = (draft: T, state: Readonly<T>) => void;
type Mutator<T> = (mutator: MutateFn<T>) => void;

type SelectorFn<T> = (state: T) => AnyDeepMemberOfState<T>;

type RenderFn<T> = (...state: Array<Readonly<ReturnType<SelectorFn<T>>>>) => JSX.Element | JSX.Element[] | null;

interface ConsumerPropsBase<T> {
    select?: Array<SelectorFn<T>> | undefined;
}

interface ConsumerPropsExplicitRender<T> extends ConsumerPropsBase<T> {
    render?: RenderFn<T> | undefined;
}

interface ConsumerPropsImplicitRender<T> extends ConsumerPropsBase<T> {
    children?: RenderFn<T> | undefined;
}

type ConsumerProps<T> = ConsumerPropsExplicitRender<T> | ConsumerPropsImplicitRender<T>;

declare class Consumer<T> extends Component<ConsumerProps<T>> {}

interface ProviderProps<T> {
    children: JSX.Element | JSX.Element[];
    initialState?: Partial<T> | undefined;
}

declare class Provider<T> extends Component<ProviderProps<T>> {}

declare function create<T extends object>(state: T): {
    Provider: new() => Provider<T>;
    Consumer: new() => Consumer<T>;
    createSelector: SelectorFn<T>;
    mutate: Mutator<T>;
};

export default create;
