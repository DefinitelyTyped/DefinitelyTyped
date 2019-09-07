// Type definitions for async-eventemitter 0.2
// Project: https://www.npmjs.com/package/async-eventemitter (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: patarapolw <https://github.com/patarapolw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type AsyncListener<T, R> = (data?: T, callback?: (result?: R) => void) => Promise<R> | void;
type EventMap = {[event in string | number | symbol]: AsyncListener<any, any>};

export default class AsyncEventEmitter<T extends EventMap> {
    emit: <K extends keyof T>(event: K, ...args: Parameters<T[K]>) => boolean;
    first<K extends keyof T>(event: K, listener: T[K]): any;
    at<K extends keyof T>(event: K, index: number, listener: T[K]): any;
    before<K extends keyof T>(event: K, target: T[K], listener: T[K]): any;
    after<K extends keyof T>(event: K, target: T[K], listener: T[K]): any;

    // https://github.com/andywer/typed-emitter/blob/master/index.d.ts
    addListener<E extends keyof T> (event: E, listener: T[E]): this
    on<E extends keyof T> (event: E, listener: T[E]): this
    once<E extends keyof T> (event: E, listener: T[E]): this
    prependListener<E extends keyof T> (event: E, listener: T[E]): this
    prependOnceListener<E extends keyof T> (event: E, listener: T[E]): this

    removeAllListeners<E extends keyof T> (event?: E): this
    removeListener<E extends keyof T> (event: E, listener: T[E]): this

    eventNames(): (keyof T)[];
    listeners<E extends keyof T> (event: E): ((...args: any[]) => void)[]
    listenerCount<E extends keyof T> (event: E): number

    getMaxListeners (): number
    setMaxListeners (maxListeners: number): this
}
