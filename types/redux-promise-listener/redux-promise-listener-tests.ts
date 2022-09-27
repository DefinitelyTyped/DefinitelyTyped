import { createStore, applyMiddleware, AnyAction } from 'redux';
import createReduxPromiseListener from 'redux-promise-listener';

// $ExpectType PromiseListener
const reduxPromiseListener = createReduxPromiseListener();
export const promiseListener = reduxPromiseListener;

declare var rootReducer: (state: any, action: any) => any;
const store = createStore(rootReducer, applyMiddleware(reduxPromiseListener.middleware));

declare const actionMatcher: (action: AnyAction) => boolean;

const API_REQUEST = 'API_REQUEST';
const API_SUCCESS = Math.random() > 0.5 ? 'API_SUCCESS' : actionMatcher;
const API_FAILURE = Math.random() > 0.5 ? 'API_FAILURE' : actionMatcher;

// $ExpectType AsyncFunction<any>
promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
});

// $ExpectType AsyncFunction<any>
const action = promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
    setPayload: action => ({
        ...action,
        input: 'additional data',
    }),
    getPayload: action => action.result,
    getError: action => action.errors,
});

// $ExpectType Promise<any>
action.asyncFunction('test');

// $ExpectType void
action.unsubscribe();

// @ts-expect-error
promiseListener.createAsyncFunction();

// @ts-expect-error
promiseListener.createAsyncFunction("I'm not a config");

promiseListener.createAsyncFunction({
    start: API_REQUEST,
    // @ts-expect-error
    resolve: 0,
    // @ts-expect-error
    reject: null,
});

interface ActionRequest {
    type: typeof API_REQUEST;
    result: string;
}

interface ActionSuccess {
    type: typeof API_SUCCESS;
    payload: number;
    result: string;
}

interface ActionError {
    type: typeof API_FAILURE;
    errors: Array<{ message: string }>;
}

// $ExpectType AsyncFunction<string>
const action2 = promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
    setPayload: (action: ActionRequest, payload) => ({
        ...action,
        input: 'additional data',
    }),
    getPayload: (action: ActionSuccess) => action.result,
    getError: (action: ActionError) => action.errors,
});

action2.asyncFunction('test');

// $ExpectType Promise<string>
type action2Ret = ReturnType<typeof action2.asyncFunction>;

// $ExpectType AsyncFunction<number>
const action3 = promiseListener.createAsyncFunction<ActionRequest, ActionSuccess, ActionError>({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
    setPayload: (action, payload) => ({
        ...action,
        input: 'additional data',
    }),
    getError: action => action.errors,
});

// $ExpectType Promise<number>
type action3Ret = ReturnType<typeof action3.asyncFunction>;

// $ExpectType AsyncFunction<string>
const action4 = promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
    setPayload: (action: ActionRequest, payload) => ({
        ...action,
        input: 'additional data',
    }),
    getPayload: (action: ActionSuccess) => action.result,
    getError: (action: ActionError) => action.errors,
});

// $ExpectType Promise<string>
type action4Ret = ReturnType<typeof action4.asyncFunction>;

interface ActionSuccessWithoutPayload {
    type: typeof API_SUCCESS;
    result: string;
}

// $ExpectType AsyncFunction<unknown>
const action5 = promiseListener.createAsyncFunction<ActionRequest, ActionSuccessWithoutPayload, ActionError>({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
    setPayload: (action, payload) => ({
        ...action,
        input: 'additional data',
    }),
    getError: action => action.errors,
});

// $ExpectType Promise<unknown>
type action5Ret = ReturnType<typeof action5.asyncFunction>;
