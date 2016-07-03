// Type definitions for redux-saga 0.9.1
// Project: https://github.com/yelouafi/redux-saga
// Definitions by: Daniel Lytkin <https://github.com/aikoven>, Dimitri Rosenberg <https://github.com/rosendi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-saga' {
  export class SagaCancellationException {
  }

  export type Saga = <T>(getState?: () => T) => Iterable<any>;
  export type Predicate = (action: any) => boolean;
  export type Pattern = string | string[] | Predicate;

  import {Middleware} from 'redux';

  interface SagaMiddleware extends Middleware {
    run(saga: Saga, ...args: any[]): void;
  }

  export default function (...sagas: Saga[]): SagaMiddleware;

  export {
    CANCEL,
    RACE_AUTO_CANCEL,
    PARALLEL_AUTO_CANCEL,
    MANUAL_CANCEL
  } from 'redux-saga/lib/proc';

  import * as monitorActions from 'redux-saga/lib/monitorActions';
  export  {monitorActions}

  export {runSaga, storeIO} from 'redux-saga/lib/runSaga'

  export interface Task<T> {
    name:string;
    isRunning():boolean;
    result():T;
    error():any;
    cancel(): void;
  }

  export function takeEvery(pattern: Pattern, saga: Saga, ...args: any[]): { [Symbol.iterator](): IterableIterator<any> };

  export function takeLatest(pattern: Pattern, saga: Saga, ...args: any[]): { [Symbol.iterator](): IterableIterator<any> };

  export function delay(ms: number): Promise<boolean>;

  export function delay<T>(ms: number, val: T): Promise<T>;

  export function isCancelError(e: any): boolean;
}

declare module 'redux-saga/effects' {
  import {Task} from 'redux-saga';
  import {Predicate} from 'redux-saga';
  import {Pattern} from 'redux-saga';

  export type Effect = {};

  type EffectFunction<T1, T2, T3> = (arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]) => Promise<any> | Iterable<any>;

  interface EffectFunctionContext<T1, T2, T3> {
    0: any;
    1: EffectFunction<T1, T2, T3>;
  }

  export function take(pattern?: Pattern): Effect;

  export function put(action: any): Effect;

  export function race(effects: {[key:string]: any}): Effect;

  export function call<T1, T2, T3>(fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function call<T1, T2, T3>(fn: EffectFunctionContext<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function apply<T1, T2, T3>(context: any, fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function fork(effect: Effect): Effect;

  export function fork<T1, T2, T3>(fn: EffectFunction<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function fork<T1, T2, T3>(fn: EffectFunctionContext<T1, T2, T3>, arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function join(task: Task<any>): Effect;

  export function select(selector?: (state: any, ...args: any[]) => any, ...args: any[]): Effect;

  export function cancel(task: Task<any>): Effect;
}

declare module 'redux-saga/lib/proc' {
  import {Task} from 'redux-saga';

  export const CANCEL: symbol;
  export const NOT_ITERATOR_ERROR: string;
  export const PARALLEL_AUTO_CANCEL: string;
  export const RACE_AUTO_CANCEL: string;
  export const MANUAL_CANCEL: string;

  export default function proc(iterator: Iterable<any>,
                               subscribe?: (cb: Function) => Function,
                               dispatch?: (action: any) => any,
                               monitor?: (action: any) => void,
                               parentEffectId?: any,
                               name?: string): Task<any>;
}


declare module 'redux-saga/lib/runSaga' {
  import {Store} from 'redux';
  import {Task} from 'redux-saga';

  interface IO {
    dispatch: (action: any) => any;
    subscribe: (cb: Function) => Function;
  }

  export function storeIO(store: Store<any>): IO;

  export function runSaga(iterator: Iterable<any>,
                          io: IO,
                          monitor?: (action: any) => void): Task<any>;
}


declare module 'redux-saga/lib/emitter' {
  export default function emitter(): {
    subscribe(cb: Function):Function;
    emit(item: any):void;
  }
}

declare module 'redux-saga/lib/monitorActions' {
  export const MONITOR_ACTION: string;
  export const EFFECT_TRIGGERED: string;
  export const EFFECT_RESOLVED: string;
  export const EFFECT_REJECTED: string;
}
