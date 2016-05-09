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

    type Reducer<Payload> = (state: Payload, action: Action<Payload>) => Payload;

    type ReducerMeta<Payload, Meta> = (state: Payload, action: ActionMeta<Payload, Meta>) => Payload;

    type ReducerMap<Payload> = {
        [actionType: string]: Reducer<Payload>
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

    export function handleAction<Payload>(
        actionType: string,
        reducer: Reducer<Payload> | ReducerMap<Payload>
    ): Reducer<Payload>;

    export function handleAction<Payload, Meta>(
        actionType: string,
        reducer: ReducerMeta<Payload, Meta> | ReducerMap<Payload>
    ): Reducer<Payload>;

    export function handleActions<Payload>(reducerMap: ReducerMap<Payload>, initialState?: Payload): Reducer<Payload>;
}

declare module 'redux-actions' {
    export = ReduxActions;
}

