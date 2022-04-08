// Type definitions for use-global-hook 0.1
// Project: https://github.com/andregardi/use-global-hook#readme
// Definitions by: James Hong <https://github.com/ojameso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import Immer from 'immer';

// Use an interface so that different versions of React can be used
interface ReactInterface {
    useEffect: (...args: any[]) => any;
    useState: (...args: any[]) => any;
    useMemo: (...args: any[]) => any;
}
// to ignore strict-export-declare-modifiers error
export {};

// Where S is typeof state and A is typeof associated actions
export interface Store<S, A> {
    state: S;
    actions: A;
    setState(state: S, afterUpdateCallback?: () => void): void;
}

type IProduce = typeof Immer;
export type InitializerFunction<S, A> = (store: Store<S, A>) => void;

export interface Options<S, A> {
    Immer?: IProduce;
    initializer?: InitializerFunction<S, A>;
}

type UseGlobal<S, A> = (() => [S, A]) &
    (<NS>(stateFunc: (state: S) => NS) => [NS, A]) &
    (<NS, NA>(stateFunc: (state: S) => NS, actionsFunc: (state: A) => NA) => [NS, NA]) &
    (<NA>(stateFunc: undefined, actionsFunc: (state: A) => NA) => [S, NA]);

// The option property also has an initializer function type for backward compatibility with 0.1.2
// see https://github.com/andregardi/use-global-hook/pull/51/files#diff-5330e30faa98f2945d75901849861a10R4
export default function useStore<S, A>(
    React: ReactInterface,
    inititalState: S,
    actions: object,
    options?: Options<S, A> | InitializerFunction<S, A>,
): UseGlobal<S, A>;
