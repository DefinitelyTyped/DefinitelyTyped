// Type definitions for p-event 2.3
// Project: https://github.com/sindresorhus/p-event#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { PCancelable } from 'p-cancelable';

export = pEvent;

/**
 * Promisify an event by waiting for it to be emitted.
 *
 * Returns a `Promise` that is fulfilled when emitter emits an event matching `event`, or rejects if emitter emits
 * any of the events defined in the `rejectionEvents` option.
 *
 * **Note**: `event` is a string for a single event type, for example, `'data'`. To listen on multiple
 * events, pass an array of strings, such as `['started', 'stopped']`.
 *
 * The returned promise has a `.cancel()` method, which when called, removes the event listeners and causes the promise to never be settled.
 *
 * @param emitter Event emitter object. Should have either a `.on()`/`.addListener()`/`.addEventListener()` and
 * `.off()`/`.removeListener()`/`.removeEventListener()` method, like the [Node.js `EventEmitter`](https://nodejs.org/api/events.html) and
 * [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events).
 * @param event Name of the event or events to listen to. If the same event is defined both here and in
 * `rejectionEvents`, this one takes priority.
 */
declare function pEvent<T, TRest = T>(
    emitter: pEvent.Emitter<T, TRest>,
    event: string | symbol | Array<string | symbol>,
    options: pEvent.MultiArgsOptions<T | TRest>
): PCancelable<Array<T | TRest>>;
declare function pEvent<T>(
    emitter: pEvent.Emitter<T, any>,
    event: string | symbol | Array<string | symbol>,
    filter: pEvent.FilterFn<T>
): PCancelable<T>;
declare function pEvent<T>(
    emitter: pEvent.Emitter<T, any>,
    event: string | symbol | Array<string | symbol>,
    options?: pEvent.Options<T>
): PCancelable<T>;

declare namespace pEvent {
    /**
     * Wait for multiple event emissions. Returns an array.
     */
    function multiple<T, TRest = T>(
        emitter: Emitter<T, TRest>,
        event: string | symbol | Array<string | symbol>,
        options: MultipleMultiArgsOptions<T | TRest>
    ): PCancelable<Array<Array<T | TRest>>>;
    function multiple<T>(
        emitter: Emitter<T, any>,
        event: string | symbol | Array<string | symbol>,
        options: MultipleOptions<T>
    ): PCancelable<T[]>;

    /**
     * Returns an [async iterator](http://2ality.com/2016/10/asynchronous-iteration.html) that lets you asynchronously
     * iterate over events of `event` emitted from `emitter`. The iterator ends when `emitter` emits an event matching
     * any of the events defined in `resolutionEvents`, or rejects if `emitter` emits any of the events defined in
     * the `rejectionEvents` option.
     */
    function iterator<T, TRest = T>(
        emitter: Emitter<T, TRest>,
        event: string | symbol | Array<string | symbol>,
        options: IteratorMultiArgsOptions<T | TRest>
    ): AsyncIterableIterator<Array<T | TRest>>;
    function iterator<T>(
        emitter: Emitter<T, any>,
        event: string | symbol | Array<string | symbol>,
        filter: FilterFn<T>
    ): AsyncIterableIterator<T>;
    function iterator<T>(
        emitter: Emitter<T, any>,
        event: string | symbol | Array<string | symbol>,
        options?: IteratorOptions<T>
    ): AsyncIterableIterator<T>;

    interface Emitter<T, TRest> {
        on?: AddRmListenerFn<T, TRest>;
        addListener?: AddRmListenerFn<T, TRest>;
        addEventListener?: AddRmListenerFn<T, TRest>;
        off?: AddRmListenerFn<T, TRest>;
        removeListener?: AddRmListenerFn<T, TRest>;
        removeEventListener?: AddRmListenerFn<T, TRest>;
    }

    type FilterFn<T> = (el: T) => boolean;

    interface Options<T> {
        /**
         * Events that will reject the promise.
         * @default ['error']
         */
        rejectionEvents?: Array<string | symbol>;
        /**
         * By default, the promisified function will only return the first argument from the event callback,
         * which works fine for most APIs. This option can be useful for APIs that return multiple arguments
         * in the callback. Turning this on will make it return an array of all arguments from the callback,
         * instead of just the first argument. This also applies to rejections.
         *
         * @example
         * const pEvent = require('p-event');
         * const emitter = require('./some-event-emitter');
         *
         * (async () => {
         *    const [foo, bar] = await pEvent(emitter, 'finish', {multiArgs: true});
         * })();
         *
         * @default false
         */
        multiArgs?: boolean;
        /**
         * Time in milliseconds before timing out.
         * @default Infinity
         */
        timeout?: number;
        /**
         * Filter function for accepting an event.
         *
         * @example
         * const pEvent = require('p-event');
         * const emitter = require('./some-event-emitter');
         *
         * (async () => {
         *     const result = await pEvent(emitter, '🦄', value => value > 3);
         *     // Do something with first 🦄 event with a value greater than 3
         * })();
         */
        filter?: FilterFn<T>;
    }

    interface MultiArgsOptions<T> extends Options<T> {
        multiArgs: true;
    }

    interface MultipleOptions<T> extends Options<T> {
        /**
         * The number of times the event needs to be emitted before the promise resolves.
         */
        count: number;
        /**
         * Whether to resolve the promise immediately. Emitting one of the `rejectionEvents` won't throw an error.
         *
         * **Note**: The returned array will be mutated when an event is emitted.
         *
         * @example
         * const emitter = new EventEmitter();
         *
         * const promise = pEvent.multiple(emitter, 'hello', {
         *     resolveImmediately: true,
         *     count: Infinity
         * });
         *
         * const result = await promise;
         * console.log(result);
         * //=> []
         *
         * emitter.emit('hello', 'Jack');
         * console.log(result);
         * //=> ['Jack']
         *
         * emitter.emit('hello', 'Mark');
         * console.log(result);
         * //=> ['Jack', 'Mark']
         *
         * // Stops listening
         * emitter.emit('error', new Error('😿'));
         *
         * emitter.emit('hello', 'John');
         * console.log(result);
         * //=> ['Jack', 'Mark']
         */
        resolveImmediately?: boolean;
    }

    interface MultipleMultiArgsOptions<T> extends MultipleOptions<T> {
        multiArgs: true;
    }

    interface IteratorOptions<T> extends Options<T> {
        /**
         * Maximum number of events for the iterator before it ends. When the limit is reached, the iterator will be
         * marked as `done`. This option is useful to paginate events, for example, fetching 10 events per page.
         * @default Infinity
         */
        limit?: number;
        /**
         * Events that will end the iterator.
         * @default []
         */
        resolutionEvents?: Array<string | symbol>;
    }

    interface IteratorMultiArgsOptions<T> extends IteratorOptions<T> {
        multiArgs: true;
    }
}

type AddRmListenerFn<T, TRest> = (
    event: string | symbol,
    listener: (arg1: T, ...args: TRest[]) => void
) => void;
