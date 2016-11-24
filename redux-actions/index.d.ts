// Type definitions for redux-actions v0.8.0
// Project: https://github.com/acdlite/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>, Alex Gorbatchev <https://github.com/alexgorbatchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ReduxActions;

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

    interface Reducer<State, Payload> {
        (state: State, action: Action<Payload>): State;
    }

    interface ReducerMeta<State, Payload, Meta> extends Reducer<State, Payload> {
        (state: State, action: ActionMeta<Payload, Meta>): State;
    }

    export function createAction<Payload>(
        actionType: string,
        payloadCreator?: (...args: any[]) => Payload,
    ): (...args: any[]) => Action<Payload>;

    export function createAction<Payload, Meta>(
        actionType: string,
        payloadCreator: (...args: any[]) => Payload,
        metaCreator: (...args: any[]) => Meta
    ): (...args: any[]) => ActionMeta<Payload, Meta>;

    export function handleAction<StateAndPayload>(
        actionType: { toString: () => string },
        reducer: Reducer<StateAndPayload, StateAndPayload> | ReducerMap<StateAndPayload, StateAndPayload>
    ): Reducer<StateAndPayload, StateAndPayload>;

    export function handleAction<State, Payload>(
        actionType: { toString(): string },
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
        ...actionTypes: { toString(): string }[]
    ): { toString(): string };
}
