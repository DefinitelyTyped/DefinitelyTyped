import Mixin from '@ember/object/mixin';

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
        method: (this: Target, ...args: any[]) => void
    ): this;
    on(name: string, method: (...args: any[]) => void): this;
    /**
     * Subscribes a function to a named event and then cancels the subscription
     * after the first time the event is triggered. It is good to use ``one`` when
     * you only care about the first time an event has taken place.
     */
    one<Target>(
        name: string,
        target: Target,
        method: (this: Target, ...args: any[]) => void
    ): this;
    one(name: string, method: (...args: any[]) => void): this;
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
        method: (this: Target, ...args: any[]) => void
    ): this;
    off(name: string, method: (...args: any[]) => void): this;
    /**
     * Checks to see if object has any subscriptions for named event.
     */
    has(name: string): boolean;
}
declare const Evented: Mixin<Evented>;
export default Evented;
/**
 * Define a property as a function that should be executed when
 * a specified event or events are triggered.
 */
export function on(
    eventNames: string,
    func: (...args: any[]) => void
): (...args: any[]) => void;
