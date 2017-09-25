// Type definitions for redux-actions 2.2
// Project: https://github.com/acdlite/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>,
//                 Alex Gorbatchev <https://github.com/alexgorbatchev>,
//                 Alec Hill <https://github.com/alechill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace ReduxActions;

// FSA-compliant action.
// See: https://github.com/acdlite/flux-standard-action
export interface BaseAction {
    type: string;
}

export interface Action<Payload> extends BaseAction {
    payload?: Payload;
    error?: boolean;
}

export interface ActionMeta<Payload, Meta> extends Action<Payload> {
    meta: Meta;
}

export interface ReducerMap<State> {
    [actionType: string]: Reducer<State, any> | ReducerNextThrow<State, any>;
}

export interface ReducerMapMeta<State, Meta> {
    [actionType: string]: ReducerMeta<State, any, Meta> | ReducerNextThrowMeta<State, any, Meta>;
}

export interface ReducerNextThrow<State, Payload> {
    next?(state: State, action: Action<Payload>): State;
    throw?(state: State, action: Action<Payload>): State;
}

export interface ReducerNextThrowMeta<State, Payload, Meta> {
    next?(state: State, action: ActionMeta<Payload, Meta>): State;
    throw?(state: State, action: ActionMeta<Payload, Meta>): State;
}

export type ActionFunctions<Payload> = ActionFunctionAny<Action<Payload>>;

export type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

export type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

/** argument inferring borrowed from lodash definitions */
export type ActionFunction<R, T1 = undefined, T2 = undefined, T3 = undefined, T4 = undefined> = (t1?: T1, t2?: T2, t3?: T3, t4?: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;

export function createAction(
    actionType: string
): ActionFunction<Action<void>>;

export function createAction<Payload, Arg1 = undefined, Arg2 = undefined, Arg3 = undefined, Arg4 = undefined>(
    actionType: string,
    payloadCreator: ActionFunction<Payload, Arg1, Arg2, Arg3, Arg4>
): ActionFunction<Action<Payload>, Arg1, Arg2, Arg3, Arg4>;

export function createAction<Payload>(
    actionType: string
): ActionFunction<Action<Payload>, Payload>;

export function createAction<Payload, Meta>(
    actionType: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<Payload, Meta>>;

export function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction<Payload, Arg1, Arg2, Arg3, Arg4>,
    metaCreator: ActionFunction<Meta, Arg1, Arg2, Arg3, Arg4>
): ActionFunction<ActionMeta<Payload, Meta>, Arg1, Arg2, Arg3, Arg4>;

export function handleAction<State, Payload>(
    actionType: string | ActionFunctions<Payload>,
    reducer: Reducer<State, Payload> | ReducerNextThrow<State, Payload>,
    initialState: State
): Reducer<State, Payload>;

export function handleAction<State, Payload, Meta>(
    actionType: { toString(): string },
    reducer: ReducerMeta<State, Payload, Meta> | ReducerNextThrowMeta<State, Payload, Meta>,
    initialState: State
): Reducer<State, Payload>;

export function handleActions<State>(
    reducerMap: ReducerMap<State>,
    initialState: State
): Reducer<State, any>;

export function handleActions<State, Meta>(
    reducerMap: ReducerMapMeta<State, Meta>,
    initialState: State
): ReducerMeta<State, any, Meta>;

export function combineActions(...actionTypes: Array<ActionFunctions<any> | string>): string;

export interface ActionMap<Payload, Meta = undefined> {
    [actionType: string]:
    ActionMap<Payload, Meta> |
    ActionFunctionAny<Payload> |
    [ActionFunctionAny<Payload>, ActionFunctionAny<Meta>] |
    undefined;
}

export function createActions<Payload>(
    actionMap: ActionMap<Payload>,
    ...identityActions: string[]
): {
    [actionName: string]: ActionFunctionAny<Action<Payload>>
};

export function createActions<Payload, Meta>(
    actionMap: ActionMap<Payload, Meta>,
    ...identityActions: string[]
): {
    [actionName: string]: ActionFunctionAny<ActionMeta<Payload, Meta>>
};
