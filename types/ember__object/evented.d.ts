import Mixin from '@ember/object/mixin';
import { AnyFn, EmberMethod, MethodNamesOf, MethodParams, MethodsOf } from 'ember/-private/type-utils';

/**
 * This mixin allows for Ember objects to subscribe to and emit events.
 */
interface Evented {
    /**
     * Subscribes to a named event with given function.
     */
    on<T>(
        name: string,
        target: T,
        method: EmberMethod<T>
    ): this;
    on(name: string, method: EmberMethod<this>): this;
    /**
     * Subscribes a function to a named event and then cancels the subscription
     * after the first time the event is triggered. It is good to use ``one`` when
     * you only care about the first time an event has taken place.
     */
    one<T>(
        name: string,
        target: T,
        method: EmberMethod<T>
    ): this;
    one(name: string, method: EmberMethod<this>): this;
    /**
     * Triggers a named event for the object. Any additional arguments
     * will be passed as parameters to the functions that are subscribed to the
     * event.
     */
    trigger(name: string, ...args: unknown[]): any;
    /**
     * Cancels subscription for given name, target, and method.
     */
    off<T>(
        name: string,
        target: T,
        method: EmberMethod<T>
    ): this;
    off(name: string, method: EmberMethod<this>): this;
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
export function on<F extends AnyFn>(
    ...args: [
        ...eventNames: string[],
        func: F
    ]
): F;
