import Mixin from "@ember/object/mixin";

/**
 * This mixin allows for Ember objects to subscribe to and emit events.
 */
interface Evented {
    /**
     * Subscribes to a named event with given function.
     */
    on<Target>(
        name: string,
        target: Target,
        method: string | ((this: Target, ...args: any[]) => void),
    ): this;
    on(name: string, method: ((...args: any[]) => void) | string): this;
    /**
     * Subscribes a function to a named event and then cancels the subscription
     * after the first time the event is triggered. It is good to use ``one`` when
     * you only care about the first time an event has taken place.
     */
    one<Target>(
        name: string,
        target: Target,
        method: string | ((this: Target, ...args: any[]) => void),
    ): this;
    one(name: string, method: string | ((...args: any[]) => void)): this;
    /**
     * Triggers a named event for the object. Any additional arguments
     * will be passed as parameters to the functions that are subscribed to the
     * event.
     */
    trigger(name: string, ...args: any[]): any;
    /**
     * Cancels subscription for given name, target, and method.
     */
    off<Target>(
        name: string,
        target: Target,
        method: string | ((this: Target, ...args: any[]) => void),
    ): this;
    off(name: string, method: string | ((...args: any[]) => void)): this;
    /**
     * Checks to see if object has any subscriptions for named event.
     */
    has(name: string): boolean;
}
declare const Evented: Mixin<Evented>;
export default Evented;

// The actual implementation allows for any number of eventName strings followed by
// the function to be called. In TypeScript 4.0 this could be better described with:
//
//   type EventNames = string[];
//   type OnArgs = [...EventNames, (...args: any[]) => void];
//   export function on(...args: OnArgs): (...args: any[]) => void;
/**
 * Define a property as a function that should be executed when
 * a specified event or events are triggered.
 */
export function on(
    eventName: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;

export function on(
    eventName: string,
    eventName2: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;

export function on(
    eventName: string,
    eventName2: string,
    eventName3: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;

export function on(
    eventName: string,
    eventName2: string,
    eventName3: string,
    eventName4: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;

export function on(
    eventName: string,
    eventName2: string,
    eventName3: string,
    eventName4: string,
    eventName5: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;

export function on(
    eventName: string,
    eventName2: string,
    eventName3: string,
    eventName4: string,
    eventName5: string,
    eventName6: string,
    func: (...args: any[]) => void,
): (...args: any[]) => void;
