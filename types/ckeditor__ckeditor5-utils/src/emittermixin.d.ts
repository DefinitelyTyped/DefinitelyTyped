import EventInfo from './eventinfo';
import { PriorityString } from './priorities';

/**
 * Emitter/listener interface.
 *
 * Can be easily implemented by a class by mixing the {@link module:utils/emittermixin~EmitterMixin} mixin.
 *
 * Read more about the usage of this interface in the:
 * * {@glink framework/guides/architecture/core-editor-architecture#event-system-and-observables Event system and observables}
 * section of the {@glink framework/guides/architecture/core-editor-architecture Core editor architecture} guide.
 * * {@glink framework/guides/deep-dive/event-system Event system} deep dive guide.
 */
export interface Emitter {
    /**
     * Registers a callback function to be executed when an event is fired.
     */
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    on(
        event: string,
        callback: (this: this, info: EventInfo, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    /**
     * Registers a callback function to be executed on the next time the event is fired only. This is similar to
     * calling {@link #on} followed by {@link #off} in the callback.
     */
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    once(
        event: string,
        callback: (this: this, info: EventInfo, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    /**
     * Stops executing the callback on the given event.
     * Shorthand for {@link #stopListening `this.stopListening( this, event, callback )`}.
     */
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    off(event: string, callback?: (this: this, info: EventInfo, ...args: any[]) => void): void;
    /**
     * Registers a callback function to be executed when an event is fired in a specific (emitter) object.
     *
     * Events can be grouped in namespaces using `:`.
     * When namespaced event is fired, it additionally fires all callbacks for that namespace.
     *
     *    // myEmitter.on( ... ) is a shorthand for myEmitter.listenTo( myEmitter, ... ).
     *    myEmitter.on( 'myGroup', genericCallback );
     *    myEmitter.on( 'myGroup:myEvent', specificCallback );
     *
     *    // genericCallback is fired.
     *    myEmitter.fire( 'myGroup' );
     *    // both genericCallback and specificCallback are fired.
     *    myEmitter.fire( 'myGroup:myEvent' );
     *    // genericCallback is fired even though there are no callbacks for "foo".
     *    myEmitter.fire( 'myGroup:foo' );
     *
     * An event callback can {@link module:utils/eventinfo~EventInfo#stop stop the event} and
     * set the {@link module:utils/eventinfo~EventInfo#return return value} of the {@link #fire} method.
     */
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: {
            priority?: PriorityString | number | undefined;
        },
    ): void;
    /**
     * Stops listening for events. It can be used at different levels:
     *
     * * To stop listening to a specific callback.
     * * To stop listening to a specific event.
     * * To stop listening to all events fired by a specific object.
     * * To stop listening to all events fired by all objects.
     */
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    /**
     * Fires an event, executing all callbacks registered for it.
     *
     * The first parameter passed to callbacks is an {@link module:utils/eventinfo~EventInfo} object,
     * followed by the optional `args` provided in the `fire()` method call.
     *
     */
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    /**
     * Delegates selected events to another {@link module:utils/emittermixin~Emitter}. For instance:
     *
     *    emitterA.delegate( 'eventX' ).to( emitterB );
     *    emitterA.delegate( 'eventX', 'eventY' ).to( emitterC );
     *
     * then `eventX` is delegated (fired by) `emitterB` and `emitterC` along with `data`:
     *
     *    emitterA.fire( 'eventX', data );
     *
     * and `eventY` is delegated (fired by) `emitterC` along with `data`:
     *
     *    emitterA.fire( 'eventY', data );
     */
    delegate(...events: string[]): EmitterMixinDelegateChain;
    /**
     * Stops delegating events. It can be used at different levels:
     *
     * * To stop delegating all events.
     * * To stop delegating a specific event to all emitters.
     * * To stop delegating a specific event to a specific emitter.
     *
     * If omitted, stops delegation of `event` to all emitters.
     */
    stopDelegating(event?: string, emitter?: Emitter): void;
}

export interface EmitterMixinDelegateChain {
    /**
     * Selects destination for {@link module:utils/emittermixin~EmitterMixin#delegate} events.
     */
    to(emitter: Emitter, nameOrFunction?: string | ((name: string) => string)): void;
}

declare const EmitterMixin: Emitter;

export default EmitterMixin;
