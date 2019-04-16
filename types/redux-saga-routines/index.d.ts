// Type definitions for redux-saga-routines 3.1
// Project: https://github.com/afitiskin/redux-saga-routines
// Definitions by: Alexey Pelykh <https://github.com/alexey-pelykh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Dispatch } from 'redux';
import {
    Action,
    ActionMeta,
    createAction,
    ActionFunction0,
    ActionFunction1,
    ActionFunction2,
    ActionFunction3,
    ActionFunction4,
    ActionFunctionAny,
} from 'redux-actions';
import { FormSubmitHandler } from 'redux-form';
import { string } from 'prop-types';

export function routinePromiseWatcherSaga(): IterableIterator<any>;

export type RoutineStages = 'TRIGGER' | 'REQUEST' | 'SUCCESS' | 'FAILURE' | 'FULFILL';

export type ActionCreatorFunction<Payload = any, Meta = any> = ActionFunctionAny<
  Action<Payload> | ActionMeta<Payload, Meta>
>;

export type Routine<
    TTriggerActionCreator = ActionCreatorFunction,
    TRequestActionCreator = ActionCreatorFunction,
    TSuccessActionCreator = ActionCreatorFunction,
    TFailureActionCreator = ActionCreatorFunction,
    TFulfillActionCreator = ActionCreatorFunction
> = TTriggerActionCreator & {
    [key in RoutineStages]: string;
} & {
    trigger: TTriggerActionCreator;
    request: TRequestActionCreator;
    success: TSuccessActionCreator;
    failure: TFailureActionCreator;
    fulfill: TFulfillActionCreator;
};

export type UnifiedRoutine<TActionCreator = ActionCreatorFunction> = Routine<
    TActionCreator,
    TActionCreator,
    TActionCreator,
    TActionCreator,
    TActionCreator
>;

export type ResolveFunctionReturnType<TFunction> =
    TFunction extends (...args: any[]) => infer TReturn ? TReturn : undefined;

export type ResolveFunctionArg1Type<TFunction> =
    TFunction extends (arg1: infer TArg1, ...args: any[]) => any ? TArg1 : undefined;

export type ResolveFunctionArg2Type<TFunction> =
    TFunction extends (arg1: any, arg2: infer TArg1, ...args: any[]) => any ? TArg1 : undefined;

export type ResolveFunctionArg3Type<TFunction> =
    TFunction extends (arg1: any, arg2: any, arg3: infer TArg1, ...args: any[]) => any ? TArg1 : undefined;

export type ResolveFunctionArg4Type<TFunction> =
    TFunction extends (arg1: any, arg2: any, arg3: any, arg4: infer TArg1, ...args: any[]) => any ? TArg1 : undefined;

export type ResolveActionCreatorByPayload<
    TPayloadCreator,
    TPayload = ResolveFunctionReturnType<TPayloadCreator>,
    TArg1 = ResolveFunctionArg1Type<TPayloadCreator>,
    TArg2 = ResolveFunctionArg2Type<TPayloadCreator>,
    TArg3 = ResolveFunctionArg3Type<TPayloadCreator>,
    TArg4 = ResolveFunctionArg4Type<TPayloadCreator>
> =
    TPayloadCreator extends ActionFunction0<TPayload> ? ActionFunction0<Action<TPayload>> :
    TPayloadCreator extends ActionFunction1<TArg1, TPayload> ? ActionFunction1<TArg1, Action<TPayload>> :
    TPayloadCreator extends ActionFunction2<TArg1, TArg2, TPayload> ? ActionFunction2<TArg1, TArg2, Action<TPayload>> :
    TPayloadCreator extends ActionFunction3<TArg1, TArg2, TArg3, TPayload> ? ActionFunction3<TArg1, TArg2, TArg3, Action<TPayload>> :
    TPayloadCreator extends ActionFunction4<TArg1, TArg2, TArg3, TArg4, TPayload> ? ActionFunction4<TArg1, TArg2, TArg3, TArg4, Action<TPayload>> : ActionFunctionAny<Action<TPayload>>;

export type ResolveActionCreatorByMeta<
    TMetaCreator,
    TMeta = ResolveFunctionReturnType<TMetaCreator>,
    TArg1 = ResolveFunctionArg1Type<TMetaCreator>,
    TArg2 = ResolveFunctionArg2Type<TMetaCreator>,
    TArg3 = ResolveFunctionArg3Type<TMetaCreator>,
    TArg4 = ResolveFunctionArg4Type<TMetaCreator>
> =
    TMetaCreator extends ActionFunction0<TMeta> ? ActionFunction0<ActionMeta<any, TMeta>> :
    TMetaCreator extends ActionFunction1<TArg1, TMeta> ? ActionFunction1<TArg1, ActionMeta<any, TMeta>> :
    TMetaCreator extends ActionFunction2<TArg1, TArg2, TMeta> ? ActionFunction2<TArg1, TArg2, ActionMeta<any, TMeta>> :
    TMetaCreator extends ActionFunction3<TArg1, TArg2, TArg3, TMeta> ? ActionFunction3<TArg1, TArg2, TArg3, ActionMeta<any, TMeta>> :
    TMetaCreator extends ActionFunction4<TArg1, TArg2, TArg3, TArg4, TMeta> ? ActionFunction4<TArg1, TArg2, TArg3, TArg4, ActionMeta<any, TMeta>> : ActionFunctionAny<ActionMeta<any, TMeta>>;

export type ResolveActionCreatorByPayloadMeta<
    TPayloadCreator,
    TMetaCreator,
    TPayload = ResolveFunctionReturnType<TPayloadCreator>,
    TMeta = ResolveFunctionReturnType<TMetaCreator>,
    TArg1 = ResolveFunctionArg1Type<TPayloadCreator>,
    TArg2 = ResolveFunctionArg2Type<TPayloadCreator>,
    TArg3 = ResolveFunctionArg3Type<TPayloadCreator>,
    TArg4 = ResolveFunctionArg4Type<TPayloadCreator>
> =
    TMetaCreator extends ActionFunction0<TMeta> ? ActionFunction0<ActionMeta<TPayload, TMeta>> :
    TMetaCreator extends ActionFunction1<TArg1, TMeta> ? ActionFunction1<TArg1, ActionMeta<TPayload, TMeta>> :
    TMetaCreator extends ActionFunction2<TArg1, TArg2, TMeta> ? ActionFunction2<TArg1, TArg2, ActionMeta<TPayload, TMeta>> :
    TMetaCreator extends ActionFunction3<TArg1, TArg2, TArg3, TMeta> ? ActionFunction3<TArg1, TArg2, TArg3, ActionMeta<TPayload, TMeta>> :
    TMetaCreator extends ActionFunction4<TArg1, TArg2, TArg3, TArg4, TMeta> ? ActionFunction4<TArg1, TArg2, TArg3, TArg4, ActionMeta<TPayload, TMeta>> : ActionFunctionAny<ActionMeta<TPayload, TMeta>>;

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

// NOTE: Default payloadCreator is identity (x => x)
// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload = any
>(
    typePrefix: string
): UnifiedRoutine<
    (payload?: Payload) => Action<Payload | undefined>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload
>(
    typePrefix: string,
    payloadCreator: ActionFunction0<Payload>
): UnifiedRoutine<
    ActionFunction0<Action<Payload>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Arg1
>(
    typePrefix: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
): UnifiedRoutine<
    ActionFunction1<Arg1, Action<Payload>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Arg1,
    Arg2
>(
    typePrefix: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
): UnifiedRoutine<
    ActionFunction2<Arg1, Arg2, Action<Payload>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Arg1,
    Arg2,
    Arg3
>(
    typePrefix: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
): UnifiedRoutine<
    ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Arg1,
    Arg2,
    Arg3,
    Arg4
>(
    typePrefix: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
): UnifiedRoutine<
    ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>
>;

// NOTE: Default payloadCreator is identity (x => x)
// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Meta
>(
    typePrefix: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>,
): UnifiedRoutine<
    (payload?: any) => ActionMeta<any, Meta>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Meta
>(
    typePrefix: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>,
): UnifiedRoutine<
    ActionFunctionAny<ActionMeta<Payload, Meta>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Meta,
    Arg1
>(
    typePrefix: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>,
): UnifiedRoutine<
    ActionFunction1<Arg1, ActionMeta<Payload, Meta>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Meta,
    Arg1,
    Arg2
>(
    typePrefix: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>,
): UnifiedRoutine<
    ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Meta,
    Arg1,
    Arg2,
    Arg3
>(
    typePrefix: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>,
): UnifiedRoutine<
    ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>
>;

// NOTE: Same payloadCreator is used for all actions of the routine
export function createRoutine<
    Payload,
    Meta,
    Arg1,
    Arg2,
    Arg3,
    Arg4
>(
    typePrefix: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>,
): UnifiedRoutine<
    ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>
>;

export function createRoutine<
    TTriggerPayloadCreator,
    TRequestPayloadCreator,
    TSuccessPayloadCreator,
    TFailurePayloadCreator,
    TFulfillPayloadCreator
>(
    typePrefix: string,
    payloadCreator: {
        TRIGGER?: TTriggerPayloadCreator,
        trigger?: TTriggerPayloadCreator,
        REQUEST?: TRequestPayloadCreator,
        request?: TRequestPayloadCreator,
        SUCCESS?: TSuccessPayloadCreator,
        success?: TSuccessPayloadCreator,
        FAILURE?: TFailurePayloadCreator,
        failure?: TFailurePayloadCreator,
        FULFILL?: TFulfillPayloadCreator,
        fulfill?: TFulfillPayloadCreator
    }
): Routine<
    ResolveActionCreatorByPayload<TTriggerPayloadCreator>,
    ResolveActionCreatorByPayload<TRequestPayloadCreator>,
    ResolveActionCreatorByPayload<TSuccessPayloadCreator>,
    ResolveActionCreatorByPayload<TFailurePayloadCreator>,
    ResolveActionCreatorByPayload<TFulfillPayloadCreator>
>;

export function createRoutine<
    TTriggerMetaCreator,
    TRequestMetaCreator,
    TSuccessMetaCreator,
    TFailureMetaCreator,
    TFulfillMetaCreator
>(
    typePrefix: string,
    payloadCreator: null | undefined,
    metaCreator: {
        TRIGGER?: TTriggerMetaCreator,
        trigger?: TTriggerMetaCreator,
        REQUEST?: TRequestMetaCreator,
        request?: TRequestMetaCreator,
        SUCCESS?: TSuccessMetaCreator,
        success?: TSuccessMetaCreator,
        FAILURE?: TFailureMetaCreator,
        failure?: TFailureMetaCreator,
        FULFILL?: TFulfillMetaCreator,
        fulfill?: TFulfillMetaCreator
    }
): Routine<
    ResolveActionCreatorByMeta<TTriggerMetaCreator>,
    ResolveActionCreatorByMeta<TRequestMetaCreator>,
    ResolveActionCreatorByMeta<TSuccessMetaCreator>,
    ResolveActionCreatorByMeta<TFailureMetaCreator>,
    ResolveActionCreatorByMeta<TFulfillMetaCreator>
>;

export function createRoutine<
    TTriggerPayloadCreator,
    TRequestPayloadCreator,
    TSuccessPayloadCreator,
    TFailurePayloadCreator,
    TFulfillPayloadCreator,
    TTriggerMetaCreator,
    TRequestMetaCreator,
    TSuccessMetaCreator,
    TFailureMetaCreator,
    TFulfillMetaCreator
>(
    typePrefix: string,
    payloadCreator: {
        TRIGGER?: TTriggerPayloadCreator,
        trigger?: TTriggerPayloadCreator,
        REQUEST?: TRequestPayloadCreator,
        request?: TRequestPayloadCreator,
        SUCCESS?: TSuccessPayloadCreator,
        success?: TSuccessPayloadCreator,
        FAILURE?: TFailurePayloadCreator,
        failure?: TFailurePayloadCreator,
        FULFILL?: TFulfillPayloadCreator,
        fulfill?: TFulfillPayloadCreator
    },
    metaCreator: {
        TRIGGER?: TTriggerMetaCreator,
        trigger?: TTriggerMetaCreator,
        REQUEST?: TRequestMetaCreator,
        request?: TRequestMetaCreator,
        SUCCESS?: TSuccessMetaCreator,
        success?: TSuccessMetaCreator,
        FAILURE?: TFailureMetaCreator,
        failure?: TFailureMetaCreator,
        FULFILL?: TFulfillMetaCreator,
        fulfill?: TFulfillMetaCreator
    }
): Routine<
    ResolveActionCreatorByPayloadMeta<TTriggerPayloadCreator, TTriggerMetaCreator>,
    ResolveActionCreatorByPayloadMeta<TRequestPayloadCreator, TRequestMetaCreator>,
    ResolveActionCreatorByPayloadMeta<TSuccessPayloadCreator, TSuccessMetaCreator>,
    ResolveActionCreatorByPayloadMeta<TFailurePayloadCreator, TFailureMetaCreator>,
    ResolveActionCreatorByPayloadMeta<TFulfillPayloadCreator, TFulfillMetaCreator>
>;
