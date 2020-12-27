declare module 'events' {
    interface EventEmitterOptions {
        /**
         * Enables automatic capturing of promise rejection.
         */
        captureRejections?: boolean;
    }

    interface NodeEventTarget {
        once(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface DOMEventTarget {
        addEventListener(event: string, listener: (...args: any[]) => void, opts?: { once: boolean }): any;
    }

    interface EventEmitter extends NodeJS.EventEmitter {}
    class EventEmitter {
        constructor(options?: EventEmitterOptions);

        static once(emitter: NodeEventTarget, event: string | symbol): Promise<any[]>;
        static once(emitter: DOMEventTarget, event: string): Promise<any[]>;
        static on(emitter: NodeJS.EventEmitter, event: string): AsyncIterableIterator<any>;

        /** @deprecated since v4.0.0 */
        static listenerCount(emitter: NodeJS.EventEmitter, event: string | symbol): number;

        /**
         * This symbol shall be used to install a listener for only monitoring `'error'`
         * events. Listeners installed using this symbol are called before the regular
         * `'error'` listeners are called.
         *
         * Installing a listener using this symbol does not change the behavior once an
         * `'error'` event is emitted, therefore the process will still crash if no
         * regular `'error'` listener is installed.
         */
        static readonly errorMonitor: unique symbol;
        static readonly captureRejectionSymbol: unique symbol;

        /**
         * Sets or gets the default captureRejection value for all emitters.
         */
        // TODO: These should be described using static getter/setter pairs:
        static captureRejections: boolean;
        static defaultMaxListeners: number;
    }

    import internal = require('events');
    namespace EventEmitter {
        // Should just be `export { EventEmitter }`, but that doesn't work in TypeScript 3.4
        export { internal as EventEmitter };
    }

    global {
        namespace NodeJS {
            interface EventEmitter {
                addListener(event: string | symbol, listener: (...args: any[]) => void): this;
                on(event: string | symbol, listener: (...args: any[]) => void): this;
                once(event: string | symbol, listener: (...args: any[]) => void): this;
                removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
                off(event: string | symbol, listener: (...args: any[]) => void): this;
                removeAllListeners(event?: string | symbol): this;
                setMaxListeners(n: number): this;
                getMaxListeners(): number;
                listeners(event: string | symbol): Function[];
                rawListeners(event: string | symbol): Function[];
                emit(event: string | symbol, ...args: any[]): boolean;
                listenerCount(event: string | symbol): number;
                // Added in Node 6...
                prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
                prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
                eventNames(): Array<string | symbol>;
            }

            interface EventInit {
                bubbles?: boolean;
                cancelable?: boolean;
                composed?: boolean;
            }

            /**
             * The `Event` object is an adaptation of the `Event Web API`.
             * Instances are created internally by Node.js.
             */
            class Event {
                constructor(type: string, eventInitDict?: EventInit);
                /**
                 * Always returns `false`.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                readonly bubbles: boolean;
                /**
                 * Alias for `event.stopPropagation()`.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                cancelBubble(): void;
                /**
                 * True if the event was created with the `cancelable` option.
                 */
                readonly cancelable: boolean;
                /**
                 * Always returns `false`.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                readonly composed: boolean;
                /**
                 * Returns an array containing the current `EventTarget` as the only entry
                 * or empty if the event is not being dispatched.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                composedPath(): EventTarget[];
                /**
                 * The `EventTarget` dispatching the event.
                 *
                 * Alias for `event.target`.
                 */
                readonly currentTarget: EventTarget | null;
                /**
                 * Is true if `cancelable` is true and `event.preventDefault()` has been called.
                 */
                readonly defaultPrevented: boolean;
                /**
                 * Returns `0` while an event is not being dispatched, `2` while it is being dispatched.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                readonly eventPhase: number;
                /**
                 * Always returns `false`.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                readonly isTrusted: boolean;
                /**
                 * Sets the `defaultPrevented` property to `true` if `cancelable` is `true`.
                 */
                preventDefault(): void;
                /**
                 * True if the event has not been canceled.
                 *
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                returnValue: boolean;
                /**
                 * The `EventTarget` dispatching the event.
                 *
                 * Alias for `event.target`.
                 */
                readonly srcElement: EventTarget;
                /**
                 * Stops the invocation of event listeners after the current one completes.
                 */
                stopImmediatePropagation(): void;
                /**
                 * This is not used in Node.js and is provided purely for completeness.
                 */
                stopPropagation(): void;
                /**
                 * The `EventTarget` dispatching the event.
                 */
                readonly target: EventTarget;
                /**
                 * The millisecond timestamp when the `Event` object was created.
                 */
                readonly timeStamp: number;
                /**
                 * The event type identifier.
                 */
                readonly type: string;

                static readonly NONE: 0;
                static readonly CAPTURING_PHASE: 1;
                static readonly AT_TARGET: 2;
                static readonly BUBBLING_PHASE: 3;
            }

            interface EventLike {
                type: string;
            }

            interface EventListenerOptions {
                /**
                 * Not directly used by Node.js. Added for API completeness.
                 */
                capture?: boolean;
            }

            interface AddEventListenerOptions extends EventListenerOptions {
                /**
                 * When `true`, the listener is automatically removed when it is first invoked
                 */
                once?: boolean;
                /**
                 * When `true`, serves as a hint that the listener will not call
                 * the `Event object's `preventDefault()` method.
                 */
                passive?: boolean;
            }

            type EventListener = ((event: Event) => void) | { handleEvent(event: Event): void; };

            class EventTarget {
                constructor();
                /**
                 * Adds a new handler for the `type` event. Any given `listener` is added
                 * only once per `type` and per `capture` option value.
                 *
                 * If the `once` option is `true`, the `listener` is removed after the next time a `type` event is dispatched.
                 *
                 * The `capture` option is not used by Node.js in any functional way other than
                 * tracking registered event listeners per the `EventTarget` specification.
                 * Specifically, the `capture` option is used as part of the key when registering a `listener`.
                 * Any individual `listener` may be added once with `capture = false`, and once with `capture = true`.
                 */
                addEventListener(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions): void;
                /**
                 * Dispatches the `event` to the list of handlers for `event.type`.
                 *
                 * The registered event listeners is synchronously invoked in the order they were registered.
                 */
                dispatchEvent(event: Event | EventLike): boolean;
                /**
                 * Removes the `listener` from the list of handlers for event `type`.
                 */
                removeEventListener(type: string, callback: EventListener, options?: EventListenerOptions | boolean): void;
            }

            /**
             * The `NodeEventTarget` is a Node.js-specific extension to `EventTarget`
             * that emulates a subset of the `EventEmitter` API.
             */
            class NodeEventTarget extends EventTarget {
                /**
                 * Node.js-specific extension to the `EventTarget` class that emulates the equivalent `EventEmitter` API.
                 * The only difference between `addListener()` and `addEventListener()` is that `addListener()`
                 * will return a reference to the `EventTarget`.
                 */
                addListener(type: string, listener: EventListener): this;
                /**
                 * Node.js-specific extension to the `EventTarget` class that returns
                 * an array of event `type` names for which event listeners are registered.
                 */
                eventNames(): string[];
                /**
                 * Node.js-specific extension to the `EventTarget` class that returns
                 * the number of event listeners registered for the `type`.
                 */
                listenerCount(type: string): number;
                /**
                 * Node.js-speciic alias for `eventTarget.removeListener()`.
                 */
                off(type: string, listener: EventListener): this;
                /**
                 * Node.js-speciic alias for `eventTarget.addListener()`.
                 */
                on(type: string, listener: EventListener): this;
                /**
                 * Node.js-specific extension to the `EventTarget` class that adds
                 * a `once` listener for the given event `type`.
                 * This is equivalent to calling `on` with the once option set to `true`.
                 */
                once(type: string, listener: EventListener): this;
                /**
                 * Node.js-specific extension to the `EventTarget` class.
                 * If `type` is specified, removes all registered listeners for `type`,
                 * otherwise removes all registered listeners.
                 */
                removeAllListeners(type?: string): this;
                /**
                 * Node.js-specific extension to the `EventTarget` class that removes
                 * the `listener` for the given `type`.
                 * The only difference between `removeListener()` and `removeEventListener()` is
                 * that `removeListener()` will return a reference to the `EventTarget`.
                 */
                removeListener(type: string, listener: EventListener): this;
            }

            interface Global {
                Event: Event;
                EventTarget: EventTarget;
            }
        }
    }

    export = EventEmitter;
}
