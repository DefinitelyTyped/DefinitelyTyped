import BaseEvent from './events/Event';
import { EventTargetLike } from './events/Target';

/**
 * Key to use with {@link module:ol/Observable~Observable#unByKey}.
 */
export interface EventsKey {
    listener: ListenerFunction;
    target: EventTargetLike;
    type: string;
}
export type Listener = ListenerFunction | ListenerObject;
/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns false, event propagation will stop.
 */
export type ListenerFunction = (p0: Event | BaseEvent) => boolean;
export interface ListenerObject {
    handleEvent: ListenerFunction;
}
/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 * This function efficiently binds a listener to a this object, and returns
 * a key for use with {@link module:ol/events~unlistenByKey}.
 */
export function listen(
    target: EventTargetLike,
    type: string,
    listener: ListenerFunction,
    opt_this?: any,
    opt_once?: boolean,
): EventsKey;
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 * This function efficiently binds a listener as self-unregistering listener
 * to a this object, and returns a key for use with
 * {@link module:ol/events~unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 * When {@link module:ol/events~listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 */
export function listenOnce(
    target: EventTargetLike,
    type: string,
    listener: ListenerFunction,
    opt_this?: any,
): EventsKey;
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 * The argument passed to this function is the key returned from
 * {@link module:ol/events~listen} or {@link module:ol/events~listenOnce}.
 */
export function unlistenByKey(key: EventsKey): void;
