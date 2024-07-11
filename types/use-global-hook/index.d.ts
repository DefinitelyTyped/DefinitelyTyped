import Immer from "immer";

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
    Immer?: IProduce | undefined;
    initializer?: InitializerFunction<S, A> | undefined;
}

type UseGlobal<S, A> =
    & (() => [S, A])
    & (<NS>(stateFunc: (state: S) => NS) => [NS, A])
    & (<NS, NA>(stateFunc: (state: S) => NS, actionsFunc: (state: A) => NA) => [NS, NA])
    & (<NA>(stateFunc: undefined, actionsFunc: (state: A) => NA) => [S, NA]);

// The option property also has an initializer function type for backward compatibility with 0.1.2
// see https://github.com/andregardi/use-global-hook/pull/51/files#diff-5330e30faa98f2945d75901849861a10R4
export default function useStore<S, A>(
    inititalState: S,
    actions: object,
    options?: Options<S, A> | InitializerFunction<S, A>,
): UseGlobal<S, A>;
