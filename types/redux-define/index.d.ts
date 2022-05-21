// Type definitions for redux-define 1.1
// Project: https://github.com/smeijer/redux-define
// Definitions by: Joe Barnett <https://github.com/ensconced>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

export as namespace ReduxDefine;

export type SubActionProps<
    SubActions extends readonly string[],
    Namespace extends string | undefined,
    T extends string,
> = {
    [k in SubActions[number]]: `${Namespace extends string ? `${Namespace}/` : ''}${T}_${k}`;
};

export type NamespaceString<T extends Action | string> = T extends Action ? T['ACTION'] : T;

export type WithNamespace<T extends string, Namespace extends string | undefined> = Namespace extends string
    ? `${Namespace}/${T}`
    : T;

export interface PlainAction<T extends string, Namespace extends string | undefined> {
    ACTION: WithNamespace<T, Namespace>;
    defineAction: typeof defineActionMethod;
    toString: () => WithNamespace<T, Namespace>;
}

export type Action<
    T extends string = string,
    SubActions extends readonly string[] | undefined = undefined,
    Namespace extends string | undefined = undefined,
> = SubActions extends readonly string[]
    ? PlainAction<T, Namespace> & SubActionProps<SubActions, Namespace, T>
    : PlainAction<T, Namespace>;

export function defineAction<T extends string>(actionType: T): Action<T>;
export function defineAction<T extends string, S extends readonly string[]>(actionType: T, subactions: S): Action<T, S>;
export function defineAction<T extends string, S extends readonly string[], N extends string | Action>(
    actionType: T,
    subactions: S,
    namespace: N,
): Action<T, S, NamespaceString<N>>;
export function defineAction<T extends string, N extends string | Action>(
    actionType: T,
    namespace: N,
): Action<T, undefined, NamespaceString<N>>;

export function defineActionMethod<Parent extends Action, T extends string>(
    this: Parent,
    actionType: T,
): Action<T, undefined, Parent['ACTION']>;
export function defineActionMethod<T extends string, N extends string | Action>(
    this: Action,
    actionType: T,
    namespace: N,
): Action<T, undefined, NamespaceString<N>>; // Here we use the namespace passed as an argument, rather than the one from `this`. This is accurate reflection of the lib behaviour, but possibly a bug.
export function defineActionMethod<Parent extends Action, T extends string, S extends readonly string[]>(
    this: Parent,
    actionType: T,
    subactions: S,
    namespace?: string | Action, // Has no effect but is permitted.
): Action<T, S, Parent['ACTION']>;
