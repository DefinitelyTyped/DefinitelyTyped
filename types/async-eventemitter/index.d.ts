// Type definitions for async-eventemitter 0.2
// Project: https://www.npmjs.com/package/async-eventemitter
// Definitions by: patarapolw <https://github.com/patarapolw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { EventEmitter } from "events";

/**
 * The API and behavior of AsyncEventEmitter is as far as possible and meaningful identical to
 * that of the native EventEmitter. However there are some important differences which should be noted.
 * - Data sent to event listeners (eg emit(data)) must always be zero or one argument, and can not be a function.
 * - Event listeners will always recieve the data object, which may or may not be undefined.
 * - The second argument can only be a callback, and will only be supplied if the event listener has an arity of two or more (eg function(e, next){}).
 * - Event listeners with an arity of one or zero (eg without a callback argument specified) will be treated as synchronous.
 * - Even if all event listeners are synchronous, they will still be executed asynchronously (through setImmediate) and thus code suceeding .emit() will be executed before any event listeners.
 * - Interupt the callback chain in async listeners by calling the callback with the error as the first parameter; in sync listeners by throwing an Error.
 * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
 */
export = AsyncEventEmitter;

/**
 * An EventEmitter that supports serial execution of asynchronous event listeners.
 * It also supports event listeners without callbacks (synchronous), as well as
 * interrupting the call-chain (similar to the DOM's e.stopPropagation()).
 */
declare class AsyncEventEmitter<
  T extends AsyncEventEmitter.EventMap
> extends EventEmitter {
  /**
   * Executes all listeners for the event in order with the supplied data argument.
   * The optional callback is called when all of the listeners are done.
   * @param event EventMap key (event name)
   * @param args EventMap parameters
   * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
   */
  emit<E extends keyof T>(
    event: E & string,
    ...args: Parameters<T[E]>
  ): boolean;
  /**
   * Adds a listener to the beginning of the listeners array for the specified event.
   * @param event EventMap key (event name)
   * @param listener EventMap value (event function)
   * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
   */
  first<E extends keyof T>(event: E & string, listener: T[E]): this;
  /**
   * Adds a listener at the specified index in the listeners array for the specified event.
   * @param event EventMap key (event name)
   * @param index Index to insert at
   * @param listener EventMap value (event function)
   * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
   */
  at<E extends keyof T>(event: E & string, index: number, listener: T[E]): this;
  /**
   * Adds a listener before the target listener in the listeners array for the specified event.
   * @param event EventMap key (event name)
   * @param target Listener to insert before
   * @param listener EventMap value (event function)
   * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
   */
  before<E extends keyof T>(
    event: E & string,
    target: T[E],
    listener: T[E],
  ): this;
  /**
   * Adds a listener after the target listener in the listeners array for the specified event.
   * @param event EventMap key (event name)
   * @param target Listener to insert before
   * @param listener EventMap value (event function)
   * @see https://www.npmjs.com/package/async-eventemitter#important-differences-between-asynceventemitter-the-native-eventemitter
   */
  after<E extends keyof T>(
    event: E & string,
    target: T[E],
    listener: T[E],
  ): this;

  // https://github.com/andywer/typed-emitter/blob/master/index.d.ts
  addListener<E extends keyof T>(event: E & string, listener: T[E]): this;
  on<E extends keyof T>(event: E & string, listener: T[E]): this;
  once<E extends keyof T>(event: E & string, listener: T[E]): this;
  prependListener<E extends keyof T>(event: E & string, listener: T[E]): this;
  prependOnceListener<E extends keyof T>(
    event: E & string,
    listener: T[E],
  ): this;

  removeAllListeners(event?: keyof T & string): this;
  removeListener<E extends keyof T>(event: E & string, listener: T[E]): this;

  eventNames(): Array<keyof T & string>;
  listeners<E extends keyof T>(event: E & string): Array<T[E]>;
  listenerCount(event: keyof T & string): number;

  getMaxListeners(): number;
  setMaxListeners(maxListeners: number): this;
}

declare namespace AsyncEventEmitter {
  type AsyncListener<T, R> = ((data: T, callback: (result?: R) => void) => Promise<R>) | ((data: T, callback: (result?: R) => void) => void);
    interface EventMap {
        [event: string]: AsyncListener<any, any>;
    }
}
