// Type definitions for use-global-hook 0.1
// Project: https://github.com/andregardi/use-global-hook#readme
// Definitions by: James Hong <https://github.com/ojameso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import React = require('react');
type ReactType = typeof React;
// to ignore strict-export-declare-modifiers error
export {};

// Where S is typeof state and A is typeof associated actions
export interface Store<S, A> {
    state: S;
    actions: A;
    setState(state: S, afterUpdateCallback?: () => void): void;
}

export type InitializerFunction<S, A> = (store: Store<S, A>) => void;

export default function useStore<S, A>(
    React: ReactType,
    inititalState: S,
    actions: object,
    initializers?: InitializerFunction<S, A>,
): <NS, NA>(stateFunc?: (state: S) => NS, actionsFunc?: (state: A) => NA) => [NS, NA];
