// Type definitions for redux-actions 1.2
// Project: https://github.com/acdlite/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>, Alex Gorbatchev <https://github.com/alexgorbatchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ReduxActions;
export as namespace ReduxActions;

declare namespace ReduxActions {
    // FSA-compliant action.
    // See: https://github.com/acdlite/flux-standard-action
    interface BaseAction {
        type: string;
    }

    export interface Action<Payload> extends BaseAction {
        payload?: Payload;
        error?: boolean;
    }

    export interface ActionMeta<Payload, Meta> extends Action<Payload> {
        meta: Meta;
    }

    interface ReducerMap<State, Payload> {
        [actionType: string]: Reducer<State, Payload>;
    }

    type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

    type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

    /** argument inferring borrowed from lodash definitions */
    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R>  = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
    type FunctionAny<R> = (...args: any[]) => R;

    export function createAction<Payload>(
        actionType: string,
        payloadCreator: Function0<Payload>
    ): Function0<Action<Payload>>;

    export function createAction<Payload, Arg1>(
        actionType: string,
        payloadCreator: Function1<Arg1, Payload>
    ): Function1<Arg1, Action<Payload>>;

    export function createAction<Payload, Arg1, Arg2>(
        actionType: string,
        payloadCreator: Function2<Arg1, Arg2, Payload>
    ): Function2<Arg1, Arg2, Action<Payload>>;

    export function createAction<Payload, Arg1, Arg2, Arg3>(
        actionType: string,
        payloadCreator: Function3<Arg1, Arg2, Arg3, Payload>
    ): Function3<Arg1, Arg2, Arg3, Action<Payload>>;

    export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
        actionType: string,
        payloadCreator: Function4<Arg1, Arg2, Arg3, Arg4, Payload>
    ): Function4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>;

    export function createAction<Payload>(
        actionType: string
    ): FunctionAny<Action<Payload>>;

    export function createAction<Payload, Meta>(
        actionType: string,
        payloadCreator: (...args: any[]) => Payload,
        metaCreator: (...args: any[]) => Meta
    ): (...args: any[]) => ActionMeta<Payload, Meta>;

    export function handleAction<State, Payload>(
        actionType: string | Function0<Action<Payload>> | Function1<any, Action<Payload>> | Function2<any, any, Action<Payload>> | Function3<any, any, any, Action<Payload>> | Function4<any, any, any, any, Action<Payload>> | FunctionAny<Action<Payload>>,
        reducer: Reducer<State, Payload> | ReducerMap<State, Payload>
    ): Reducer<State, Payload>;

    export function handleAction<State, Payload, Meta>(
        actionType: { toString(): string },
        reducer: ReducerMeta<State, Payload, Meta> | ReducerMap<State, Payload>
    ): Reducer<State, Payload>;

    export function handleActions<StateAndPayload>(
        reducerMap: ReducerMap<StateAndPayload, StateAndPayload>,
        initialState?: StateAndPayload
    ): Reducer<StateAndPayload, StateAndPayload>;

    export function handleActions<State, Payload>(
        reducerMap: ReducerMap<State, Payload>,
        initialState?: State
    ): Reducer<State, Payload>;

    export function combineActions(
        ...actionTypes: Array<{ toString(): string }>
    ): { toString(): string };
}
