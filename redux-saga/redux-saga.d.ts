// Type definitions for redux-saga 0.6.0
// Project: https://github.com/yelouafi/redux-saga
// Definitions by: Daniel Lytkin <https://github.com/aikoven>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-saga' {
  export class SagaCancellationException {
  }

  export type Effect = {};

  export type Saga = <T>(getState?: () => T) => Iterable<any>;

  type Predicate = (action: any) => boolean;

  export function take(pattern?: string|string[]|Predicate): Effect;

  export function put(action: any): Effect;

  export function race(effects: {[key:string]: any}): Effect;

  export function call<T1, T2, T3>(fn: (arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]) => any,
                                   arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;


  export interface Task<T> {
    name:string;
    isRunning():boolean;
    result():T;
    error():any;
  }

  export function fork(effect: Effect): Effect;
  export function fork<T1, T2, T3>(fn: (arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]) =>
    Promise<any>|Iterable<any>,
                                   arg1?: T1, arg2?: T2, arg3?: T3, ...rest: any[]): Effect;

  export function join(task: Task<any>): Effect;

  export function cancel(task: Task<any>): Effect;


  import {Middleware} from 'redux';
  export default function (...sagas: Saga[]): Middleware;

  export {
    CANCEL,
    RACE_AUTO_CANCEL,
    PARALLEL_AUTO_CANCEL,
    MANUAL_CANCEL
  } from 'redux-saga/lib/proc';

  import * as monitorActions from 'redux-saga/lib/monitorActions';
  export  {monitorActions}

  export {runSaga, storeIO} from 'redux-saga/lib/runSaga'

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

  export function storeIO(store: Store): IO;

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
