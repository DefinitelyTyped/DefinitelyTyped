// Type definitions for event-to-promise v0.7.0
// Project: https://github.com/JsCommunity/event-to-promise
// Definitions by: flying-sheep <https://github.com/flying-sheep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events'

type EventSource = EventEmitter | EventTarget

interface EventToPromiseOptions {
    /**  If true, all parameters of the emitted events are put in an array which is used to resolve/reject the promise. (default: `false`) */
    array?: boolean,
    /** The name of the event which rejects the promise. (default: `'error'`) */
    error?: string,
    /** Whether the error event should be ignored and not reject the promise. (default: `false`) */
    ignoreErrors?: boolean,
}

/**
 * Wait for one event. The first parameter of the emitted event is used to resolve/reject the promise.
 * 
 * @param emitter  The event emitter you want to watch an event on.
 * @param event    The name of the event you want to watch.
 * @param options  An `Object` controlling advanced options.
 * @return         The returned promise has a `cancel()` method which can be used to remove the event listeners. Note that the promise will never settled if canceled.
 */
declare function eventToPromise(emitter: EventSource, event: string, options?: EventToPromiseOptions): Promise<any>;

declare namespace eventToPromise {
    /**
     * Wait for one of multiple events. The array of all the parameters of the emitted event is used to resolve/reject the promise.
     * 
     * The array also has an event property indicating which event has been emitted.
     * 
     * @param emitter        The event emitter you want to watch an event on.
     * @param successEvents  The names of the events which resolve the promise.
     * @param errorEvents    The names of the events which reject the promise. (default: `['error']`)
     * @return               The returned promise has a `cancel()` method which can be used to remove the event listeners. Note that the promise will never settled if canceled.
     */
    export function multi(emitter: EventSource, successEvents: string[], errorEvents?: string[]): Promise<any>;
}

export = eventToPromise
