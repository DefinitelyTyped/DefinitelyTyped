// Type definitions for redux-actions 2.6
// Project: https://github.com/redux-utilities/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>,
//                 Alex Gorbatchev <https://github.com/alexgorbatchev>,
//                 Alec Hill <https://github.com/alechill>
//                 Alexey Pelykh <https://github.com/alexey-pelykh>
//                 Thiago de Andrade <https://github.com/7hi4g0>
//                 Ziyu <https://github.com/oddui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace ReduxActions;

// FSA-compliant action.
// See: https://github.com/acdlite/flux-standard-action
export interface BaseAction<T extends string> {
    type: T;
}

export interface Action<Payload, T extends string> extends BaseAction<T> {
    payload: Payload;
    error?: boolean;
}

export interface ActionMeta<Payload, Meta, T extends string> extends Action<Payload, T> {
    meta: Meta;
}

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/combineActions.js#L27
export interface CombinedActionType {
    _dummy: undefined;
}

export type ReducerMapValue<State, Payload, T extends string> =
    Reducer<State, Payload, T>
    | ReducerNextThrow<State, Payload, T>
    | ReducerMap<State, Payload, T>;

export interface ReducerMap<State, Payload, T extends string> {
    [actionType: string]: ReducerMapValue<State, Payload, T>;
}

export interface ReducerMapMeta<State, Payload, Meta, T extends string> {
    [actionType: string]: ReducerMeta<State, Payload, Meta, T> | ReducerNextThrowMeta<State, Payload, Meta, T> | ReducerMapMeta<State, Payload, Meta, T>;
}

export interface ReducerNextThrow<State, Payload, T extends string> {
    next?(state: State, action: Action<Payload, T>): State;

    throw?(state: State, action: Action<Payload, T>): State;
}

export interface ReducerNextThrowMeta<State, Payload, Meta, T extends string> {
    next?(state: State, action: ActionMeta<Payload, Meta, T>): State;

    throw?(state: State, action: ActionMeta<Payload, Meta, T>): State;
}

export type BaseActionFunctions<TAction> =
    ActionFunction0<TAction> |
    ActionFunction1<any, TAction> |
    ActionFunction2<any, any, TAction> |
    ActionFunction3<any, any, any, TAction> |
    ActionFunction4<any, any, any, any, TAction> |
    ActionFunctionAny<TAction>;

export type ActionFunctions<Payload, T extends string> = BaseActionFunctions<Action<Payload, T>>;

export type ActionWithMetaFunctions<Payload, Meta, T extends string> = BaseActionFunctions<ActionMeta<Payload, Meta, T>>;

export type Reducer<State, Payload, T extends string> = (state: State, action: Action<Payload, T>) => State;

export type ReducerMeta<State, Payload, Meta, T extends string> = (state: State, action: ActionMeta<Payload, Meta, T>) => State;

export type ReduxCompatibleReducer<State, Payload, T extends string> = (state: State | undefined, action: Action<Payload, T>) => State;

export type ReduxCompatibleReducerMeta<State, Payload, Meta, T extends string> = (state: State | undefined, action: ActionMeta<Payload, Meta, T>) => State;

/** argument inferring borrowed from lodash definitions */
export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/createAction.js#L6
export function createAction<T extends string>(
    actionType: T,
): ActionFunctionAny<Action<any, T>>;

export function createAction<Payload, T extends string>(
    actionType: T,
    payloadCreator: ActionFunction0<Payload>,
): ActionFunction0<Action<Payload, T>>;

export function createAction<Payload, Arg1, T extends string>(
    actionType: T,
    payloadCreator: ActionFunction1<Arg1, Payload>,
): ActionFunction1<Arg1, Action<Payload, T>>;

export function createAction<Payload, Arg1, Arg2, T extends string>(
    actionType: T,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
): ActionFunction2<Arg1, Arg2, Action<Payload, T>>;

export function createAction<Payload, Arg1, Arg2, Arg3, T extends string>(
    actionType: T,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload, T>>;

export function createAction<Payload, Arg1, Arg2, Arg3, Arg4, T extends string>(
    actionType: T,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload, T>>;

export function createAction<Payload, T extends string>(
    actionType: T,
): ActionFunction1<Payload, Action<Payload, T>>;

export function createAction<Meta, T extends string>(
    actionType: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>,
): ActionFunctionAny<ActionMeta<any, Meta, T>>;

export function createAction<Payload, Meta, T extends string>(
    actionType: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>,
): ActionFunctionAny<ActionMeta<Payload, Meta, T>>;

export function createAction<Payload, Meta, Arg1, T extends string>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>,
): ActionFunction1<Arg1, ActionMeta<Payload, Meta, T>>;

export function createAction<Payload, Meta, Arg1, Arg2, T extends string>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>,
): ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta, T>>;

export function createAction<Payload, Meta, Arg1, Arg2, Arg3, T extends string>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>,
): ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta, T>>;

export function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4, T extends string>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>,
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta, T>>;

export function handleAction<State, Payload, T extends string>(
    actionType: string | ActionFunctions<Payload, T> | CombinedActionType,
    reducer: Reducer<State, Payload, T> | ReducerNextThrow<State, Payload, T>,
    initialState: State,
): ReduxCompatibleReducer<State, Payload, T>;

export function handleAction<State, Payload, Meta, T extends string>(
    actionType: string | ActionWithMetaFunctions<Payload, Meta, T> | CombinedActionType,
    reducer: ReducerMeta<State, Payload, Meta, T> | ReducerNextThrowMeta<State, Payload, Meta, T>,
    initialState: State,
): ReduxCompatibleReducerMeta<State, Payload, Meta, T>;

export interface Options {
    prefix?: string;
    namespace?: string;
}

export function handleActions<StateAndPayload, T extends string>(
    reducerMap: ReducerMap<StateAndPayload, StateAndPayload, T>,
    initialState: StateAndPayload,
    options?: Options,
): ReduxCompatibleReducer<StateAndPayload, StateAndPayload, T>;

export function handleActions<State, Payload, T extends string>(
    reducerMap: ReducerMap<State, Payload, T>,
    initialState: State,
    options?: Options,
): ReduxCompatibleReducer<State, Payload, T>;

export function handleActions<State, Payload, Meta, T extends string>(
    reducerMap: ReducerMapMeta<State, Payload, Meta, T>,
    initialState: State,
    options?: Options,
): ReduxCompatibleReducerMeta<State, Payload, Meta, T>;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/combineActions.js#L21
export function combineActions(...actionTypes: Array<ActionFunctions<any, any> | string | symbol>): CombinedActionType;

export interface ActionMap<Payload, Meta> {
    [actionType: string]:
        ActionMap<Payload, Meta> |
        ActionFunctionAny<Payload> |
        [ActionFunctionAny<Payload>, ActionFunctionAny<Meta>] |
        undefined;
}

export function createActions<Payload, T extends string>(
    actionMapOrIdentityAction: ActionMap<Payload, any> | string,
    ...identityActions: Array<string | Options>
): {
    [actionName: string]: ActionFunctionAny<Action<Payload, T>>
};

export function createActions<T extends string>(
    actionMapOrIdentityAction: ActionMap<any, any> | string,
    ...identityActions: Array<string | Options>
): {
    [actionName: string]: ActionFunctionAny<Action<any, T>>
};
