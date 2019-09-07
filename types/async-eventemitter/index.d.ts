// Type definitions for async-eventemitter 0.2
// Project: https://www.npmjs.com/package/async-eventemitter (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: patarapolw <https://github.com/patarapolw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export type AsyncListener<T, R> = (data?: T, callback?: (result?: R) => void) => Promise<R> | void;
export type EventMap = {[event in string | number | symbol]: AsyncListener<any, any>};

export default class AsyncEventEmitter<T extends EventMap> {
    emit: <K extends keyof T>(event: K, ...args: Parameters<T[K]>) => boolean;
    first<K extends keyof T>(event: K, listener: T[K]): any;
    at<K extends keyof T>(event: K, index: number, listener: T[K]): any;
    before<K extends keyof T>(event: K, target: T[K], listener: T[K]): any;
    after<K extends keyof T>(event: K, target: T[K], listener: T[K]): any;

    // https://github.com/andywer/typed-emitter/blob/master/index.d.ts
    addListener<E extends keyof T>(event: E, listener: T[E]): this;
    on<E extends keyof T>(event: E, listener: T[E]): this;
    once<E extends keyof T>(event: E, listener: T[E]): this;
    prependListener<E extends keyof T>(event: E, listener: T[E]): this;
    prependOnceListener<E extends keyof T>(event: E, listener: T[E]): this;

    removeAllListeners(event?: keyof T): this;
    removeListener<E extends keyof T>(event: E, listener: T[E]): this;

    eventNames(): Array<keyof T>;
    listeners<E extends keyof T>(event: E): Array<T[E]>;
    listenerCount(event: keyof T): number;

    getMaxListeners(): number;
    setMaxListeners(maxListeners: number): this;
}
