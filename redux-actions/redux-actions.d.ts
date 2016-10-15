// Type definitions for redux-actions v0.8.0
// Project: https://github.com/acdlite/redux-actions
// Definitions by: Jack Hsu <https://github.com/jaysoo>, Alex Gorbatchev <https://github.com/alexgorbatchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReduxActions {
    // FSA-compliant action.
    // See: https://github.com/acdlite/flux-standard-action
    interface BaseAction {
        type: string
    }

    interface Action<Payload> extends BaseAction {
        payload?: Payload
        error?: boolean
        meta?: any
    }

    interface ActionMeta<Payload, Meta> extends Action<Payload> {
        meta: Meta
    }

    type PayloadCreator<Input, Payload> = (...args: Input[]) => Payload;

    type MetaCreator<Input, Payload> = (...args: Input[]) => Payload;

    type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

    type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

    type ReducerMap<State, Payload> = {
        [actionType: string]: Reducer<State, Payload>
    };

    export function createAction(
        actionType: string,
        payloadCreator?: PayloadCreator<any, any>,
        metaCreator?: MetaCreator<any, any>
    ): (...args: any[]) => Action<any>;

    export function createAction<InputAndPayload>(
        actionType: string,
        payloadCreator?: PayloadCreator<InputAndPayload, InputAndPayload>
    ): (...args: InputAndPayload[]) => Action<InputAndPayload>;

    export function createAction<Input, Payload>(
        actionType: string,
        payloadCreator?: PayloadCreator<Input, Payload>
    ): (...args: Input[]) => Action<Payload>;

    export function createAction<Input, Payload, Meta>(
        actionType: string,
        payloadCreator: PayloadCreator<Input, Payload>,
        metaCreator: MetaCreator<Input, Meta>
    ): (...args: Input[]) => ActionMeta<Payload, Meta>;

    export function handleAction<StateAndPayload>(
        actionType: { toString: () => string },
        reducer: Reducer<StateAndPayload, StateAndPayload> | ReducerMap<StateAndPayload, StateAndPayload>
    ): Reducer<StateAndPayload, StateAndPayload>;

    export function handleAction<State, Payload>(
        actionType: { toString: () => string },
        reducer: Reducer<State, Payload> | ReducerMap<State, Payload>
    ): Reducer<State, Payload>;

    export function handleAction<State, Payload, Meta>(
        actionType: { toString: () => string },
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
        ...actionTypes: { toString: () => string }[]
    ): { toString: () => string };
}

declare module 'redux-actions' {
    export = ReduxActions;
}

