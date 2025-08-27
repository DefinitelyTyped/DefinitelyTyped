import * as React from "react";

interface WithSideEffect {
    <TProp, TState>(
        reducePropsToState: (propsList: TProp[]) => TState,
        handleStateChangeOnClient: (state: TState) => void,
    ): ClassDecorator<TProp, TState, TState>;

    <TProp, TState, TServerState>(
        reducePropsToState: (propsList: TProp[]) => TState,
        handleStateChangeOnClient: (state: TState) => void,
        mapStateOnServer: (state: TState) => TServerState,
    ): ClassDecorator<TProp, TState | TServerState, TServerState>;
}

declare const withSideEffect: WithSideEffect;

type ClassDecorator<TProp, TPeek, TRewind> = (
    component: React.ComponentType<TProp>,
) => React.ComponentType<TProp> & {
    peek: () => TPeek;
    rewind: () => TRewind;
};

declare namespace withSideEffect {} // https://github.com/Microsoft/TypeScript/issues/5073

export = withSideEffect;
