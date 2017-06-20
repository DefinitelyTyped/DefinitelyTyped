// Type definitions for redux-actions 1.2
// Project: https://github.com/acdlite/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>, Alex Gorbatchev <https://github.com/alexgorbatchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

export interface ReducerMap<State, Payload> {
    [actionType: string]: Reducer<State, Payload> | ReducerNextThrow<State, Payload>;
}

export interface ReducerMapMeta<State, Payload, Meta> {
    [actionType: string]: Reducer<State, Payload> | ReducerNextThrow<State, Payload>;
}

export interface ReducerNextThrow<State, Payload> {
    next?(state: State, action: Action<Payload>): State;
    throw?(state: State, action: Action<Payload>): State;
}

export interface ReducerNextThrowMeta<State, Payload, Meta> {
    next?(state: State, action: ActionMeta<Payload, Meta>): State;
    throw?(state: State, action: ActionMeta<Payload, Meta>): State;
}

export type ActionFunctions<Payload> =
    ActionFunction0<Action<Payload>> |
    ActionFunction1<any, Action<Payload>> |
    ActionFunction2<any, any, Action<Payload>> |
    ActionFunction3<any, any, any, Action<Payload>> |
    ActionFunction4<any, any, any, any, Action<Payload>> |
    ActionFunctionAny<Action<Payload>>;

export type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

export type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

/** argument inferring borrowed from lodash definitions */
export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R>  = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;

export function createAction(
    actionType: string
): ActionFunction0<Action<void>>;

export function createAction<Payload>(
    actionType: string,
    payloadCreator: ActionFunction0<Payload>
): ActionFunction0<Action<Payload>>;

export function createAction<Payload, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>
): ActionFunction1<Arg1, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): ActionFunction2<Arg1, Arg2, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>;

export function createAction<Payload>(
    actionType: string
): ActionFunction1<Payload, Action<Payload>>;

export function createAction<Payload, Meta>(
    actionType: string,
    payloadCreator: (...args: any[]) => Payload,
    metaCreator: (...args: any[]) => Meta
): (...args: any[]) => ActionMeta<Payload, Meta>;

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

export function handleActions<StateAndPayload>(
    reducerMap: ReducerMap<StateAndPayload, StateAndPayload>,
    initialState: StateAndPayload
): Reducer<StateAndPayload, StateAndPayload>;

export function handleActions<State, Payload>(
    reducerMap: ReducerMap<State, Payload>,
    initialState: State
): Reducer<State, Payload>;

export function combineActions(
    ...actionTypes: Array<ActionFunctions<any> | string>
): Array<ActionFunctions<any>>;
