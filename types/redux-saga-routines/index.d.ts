// Type definitions for redux-saga-routines 3.0
// Project: https://github.com/afitiskin/redux-saga-routines
// Definitions by: Alexey Pelykh <https://github.com/alexey-pelykh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Dispatch } from 'redux';
import {
    Action,
    ActionMeta,
    createAction,
    ActionFunctions,
    ActionWithMetaFunctions,
    ActionFunction0,
    ActionFunction1,
    ActionFunction2,
    ActionFunction3,
    ActionFunction4,
    ActionFunctionAny,
} from 'redux-actions';
import { FormSubmitHandler } from 'redux-form';

export function routinePromiseWatcherSaga(): Generator;

export type ActionCreator = ActionFunctions<any> | ActionWithMetaFunctions<any, any>;

export type Routine<
    TTriggerActionCreator = ActionCreator
> = TTriggerActionCreator & {
    TRIGGER: string;
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    FULFILL: string;
} & {
    trigger: TTriggerActionCreator;
    request: ActionCreator;
    success: ActionCreator;
    failure: ActionCreator;
    fulfill: ActionCreator;
};

export interface ReduxFormPayload<TFormData = {}, TProps = {}> {
    values: TFormData;
    props: TProps;
}

export function bindRoutineToReduxForm<
    TFormData = {},
    TProps = {},
>(
    routine: Routine<
        ActionFunction1<ReduxFormPayload<TFormData, TProps>,
        Action<ReduxFormPayload<TFormData, TProps>>>
    > | Routine<
        ActionFunction1<ReduxFormPayload<TFormData, TProps>,
        ActionMeta<ReduxFormPayload<TFormData, TProps>, any>>
    >,
    noSuccessPayload?: boolean,
): FormSubmitHandler<TFormData, TProps>;

export type PromiseCreator<
    TPayload = {},
> = (payload: TPayload, dispatch: Dispatch) => PromiseLike<any>;

export function promisifyRoutine(
    routine: Routine,
): PromiseCreator;

export type BoundPromiseCreator<
    TPayload = {},
> = (payload: TPayload) => PromiseLike<any>;

export function bindPromiseCreators<TPayload>(
    promiseCreator: PromiseCreator<TPayload>,
    dispatch: Dispatch,
): BoundPromiseCreator<TPayload>;

export function bindPromiseCreators(
    promiseCreators: { [key: string]: PromiseCreator },
    dispatch: Dispatch,
): { [key: string]: BoundPromiseCreator };

export function bindPromiseCreators(
    promiseCreators: { [key: number]: PromiseCreator },
    dispatch: Dispatch,
): { [key: number]: BoundPromiseCreator };

export const ROUTINE_PROMISE_ACTION: string;

// TODO: support https://github.com/afitiskin/redux-saga-routines/commit/9eb5a240df25d771f9dfbd4cb90e898d111242ab

export function createRoutine(
    typePrefix: string,
): Routine<ActionFunctionAny<Action<any>>>;

export function createRoutine<Payload>(
    typePrefix: string,
    payloadCreator: ActionFunction0<Payload>,
): Routine<ActionFunction0<Action<Payload>>>;

export function createRoutine<Payload, Arg1>(
    typePrefix: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
): Routine<ActionFunction1<Arg1, Action<Payload>>>;

export function createRoutine<Payload, Arg1, Arg2>(
    typePrefix: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
): Routine<ActionFunction2<Arg1, Arg2, Action<Payload>>>;

export function createRoutine<Payload, Arg1, Arg2, Arg3>(
    typePrefix: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
): Routine<ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>>;

export function createRoutine<Payload, Arg1, Arg2, Arg3, Arg4>(
    typePrefix: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
): Routine<ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>>;

export function createRoutine<Payload>(
    typePrefix: string,
): Routine<ActionFunction1<Payload, Action<Payload>>>;

export function createRoutine<Meta>(
    typePrefix: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>,
): Routine<ActionFunctionAny<ActionMeta<any, Meta>>>;

export function createRoutine<Payload, Meta>(
    typePrefix: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>,
): Routine<ActionFunctionAny<ActionMeta<Payload, Meta>>>;

export function createRoutine<Payload, Meta, Arg1>(
    typePrefix: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>,
): Routine<ActionFunction1<Arg1, ActionMeta<Payload, Meta>>>;

export function createRoutine<Payload, Meta, Arg1, Arg2>(
    typePrefix: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>,
): Routine<ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>>;

export function createRoutine<Payload, Meta, Arg1, Arg2, Arg3>(
    typePrefix: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>,
): Routine<ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>>;

export function createRoutine<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    typePrefix: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>,
): Routine<ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>>;
