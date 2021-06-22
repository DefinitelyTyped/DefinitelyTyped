import Disposable from '../Disposable';
import { Listener } from '../events';
import BaseEvent from './Event';

export type EventTargetLike = EventTarget | Target;
export default class Target extends Disposable {
    constructor(opt_target?: any);
    addEventListener(type: string, listener: Listener): void;
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a type property.
     */
    dispatchEvent(event: BaseEvent | string): boolean | undefined;
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     */
    getListeners(type: string): Listener[] | undefined;
    hasListener(opt_type?: string): boolean;
    removeEventListener(type: string, listener: Listener): void;
}
