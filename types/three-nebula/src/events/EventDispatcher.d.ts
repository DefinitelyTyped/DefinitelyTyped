import Particle from '../core/Particle';
import System from '../core/System';
import { Emitter } from '../emitter';

/*
 * EventDispatcher
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 **/
export type Listener = (event: any) => void;
export type EventTarget = Emitter | Particle | System;

export default class EventDispatcher {
    constructor();
    /**
     * Static initializer to mix EventDispatcher methods into a target object or prototype.
     */
    set listeners(listeners: Listener[]);
    /**
     * Static getter for EventDispatcher methods to mix into a target object or prototype.
     */
    get listeners(): Listener[];
    /**
     * Adds the specified event listener.
     * @param {String} type The string type of the event.
     * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when the event is dispatched.
     * @return {Function | Object} Returns the listener for chaining or assignment.
     */
    addEventListener(type: string, listener: Listener): Listener;
    /**
     *
     * @param {String} type The string type of the event.
     * @param {Function | Object} listener The listener function
     */
    removeEventListener(type: string, listener: Listener): void;
    /**
     *
     * @param {String} type The string type of the event to remove all listeners for.
     */
    removeAllEventListeners(type: string): void;
    /**
     *
     * @param {String} eventName  The string type of the event.
     * @param {Object} eventTarget The object to use as the target property of the event object. This will default to the dispatching object.
     */
    dispatchEvent(eventName: string, eventTarget: EventTarget): void;
    /**
     * @param {String} type The string type of the event.
     */
    hasEventListener(type: string): boolean;
}
