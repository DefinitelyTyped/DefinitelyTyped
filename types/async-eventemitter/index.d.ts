// Type definitions for async-eventemitter 0.2
// Project: https://www.npmjs.com/package/async-eventemitter (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: patarapolw <https://github.com/patarapolw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { EventEmitter } from "events";

export type AsyncListener<T, R> = (data?: T, callback?: (result?: R) => void) => Promise<R> | void;
export interface EventMap {
    [event: string]: AsyncListener<any, any>;
}

export default class AsyncEventEmitter<T extends EventMap> extends EventEmitter {
    emit: <E extends keyof T>(event: E, ...args: Parameters<T[E]>) => boolean;
    first<E extends keyof T>(event: E, listener: T[E]): this;
    at<E extends keyof T>(event: E, index: number, listener: T[E]): this;
    before<E extends keyof T>(event: E, target: T[E], listener: T[E]): this;
    after<E extends keyof T>(event: E, target: T[E], listener: T[E]): this;

    // https://github.com/andywer/typed-emitter/blob/master/index.d.ts
    addListener<E extends keyof T>(event: E, listener: T[E]): this;
    on<E extends keyof T>(event: E, listener: T[E]): this;
    once<E extends keyof T>(event: E, listener: T[E]): this;
    prependListener<E extends keyof T>(event: E, listener: T[E]): this;
    prependOnceListener<E extends keyof T>(event: E, listener: T[E]): this;

    removeAllListeners(event?: keyof T): this;
    removeListener<E extends (keyof T & string)>(event: E, listener: T[E]): this;

    eventNames(): Array<keyof T & string>;
    listeners<E extends keyof T>(event: E): Array<T[E]>;
    listenerCount(event: keyof T): number;

    getMaxListeners(): number;
    setMaxListeners(maxListeners: number): this;
}
