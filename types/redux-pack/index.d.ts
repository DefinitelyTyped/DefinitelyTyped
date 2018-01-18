// Type definitions for redux-pack 0.1
// Project: https://github.com/lelandrichardson/redux-pack
// Definitions by: tansongyang <https://github.com/tansongyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
import {
    Action as ReduxAction,
    Middleware,
    Reducer,
} from 'redux';

export const KEY: {
    readonly LIFECYCLE: 'redux-pack/LIFECYCLE'
    readonly TRANSACTION: 'redux-pack/TRANSACTION'
};

export const LIFECYCLE: {
    readonly START: 'start'
    readonly SUCCESS: 'success'
    readonly FAILURE: 'failure'
};
export type LIFECYCLEValues = 'start'| 'succes'| 'failure';

export const middleware: Middleware;

export interface Handlers<S> {
    start?: Reducer<S>;
    finish?: Reducer<S>;
    failure?: Reducer<S>;
    success?: Reducer<S>;
    always?: Reducer<S>;
}
export type GetState<S> = () => S;
export interface ActionMeta<TState = {}, TSuccessPayload = {}, TErrorPayload = {}, TStartPayload = {}> {
    startPayload?: TStartPayload;
    onStart?(payload: TStartPayload, getState: GetState<TState>): void;
    onFinish?(resolved: boolean, getState: GetState<TState>): void;
    onSuccess?(response: TSuccessPayload, getState: GetState<TState>): void;
    onFailure?(error: TErrorPayload, getState: GetState<TState>): void;
    ['redux-pack/LIFECYCLE']?: keyof LIFECYCLEValues;
    ['redux-pack/TRANSACTION']?: string;
}
export interface Action<TState = {}, TSuccessPayload = {}, TErrorPayload = {}, TStartPayload = {}> extends ReduxAction {
    promise?: Promise<TSuccessPayload>;
    payload?: TSuccessPayload | TErrorPayload | TStartPayload;
    meta?: ActionMeta<TState, TSuccessPayload, TErrorPayload, TStartPayload>;
}
export function handle<TState>(
    state: TState,
    action: Action<TState, any, any, any>,
    handlers: Handlers<TState>)
    : TState;
