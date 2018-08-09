// Type definitions for react-side-effect 1.1
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
//                 Martin Charles <https://github.com/0xcaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface WithSideEffect {
    <TProp, TState>(
        reducePropsToState: (propsList: TProp[]) => TState,
        handleStateChangeOnClient: (state: TState) => void
    ): ClassDecorator<TProp, TState, TState>;

    <TProp, TState, TServerState>(
        reducePropsToState: (propsList: TProp[]) => TState,
        handleStateChangeOnClient: (state: TState) => void,
        mapStateOnServer: (state: TState) => TServerState
    ): ClassDecorator<TProp, TState | TServerState, TServerState>;
}

declare const withSideEffect: WithSideEffect;

type ClassDecorator<TProp, TPeek, TRewind> = (
    component: React.ComponentType<TProp>
) => React.ComponentType<TProp> & {
    peek: () => TPeek;
    rewind: () => TRewind;
};

declare namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073

export = withSideEffect;
