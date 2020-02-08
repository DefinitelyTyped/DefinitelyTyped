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

// $ExpectType AsyncFunction
promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: API_SUCCESS,
    reject: API_FAILURE,
});

// $ExpectType AsyncFunction
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

// $ExpectError
promiseListener.createAsyncFunction();

// $ExpectError
promiseListener.createAsyncFunction("I'm not a config");

promiseListener.createAsyncFunction({
    start: API_REQUEST,
    resolve: 0, // $ExpectError
    reject: null, // $ExpectError
});
