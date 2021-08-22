import { DomEventData, DowncastWriter } from '@ckeditor/ckeditor5-engine';
import { HighlightDescriptor } from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export default class HighlightStack implements Emitter {
    add(descriptor: HighlightDescriptor, writer: DowncastWriter): void;
    remove(id: string, writer: DowncastWriter): void;

    /**
     * Registers a callback function to be executed when an event is fired.
     *
     * Shorthand for {@link #listenTo `this.listenTo( this, event, callback, options )`} (it makes the emitter
     * listen on itself).
     *
     * the priority value the sooner the callback will be fired. Events having the same priority are called in the
     * order they were added.
     */
    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    /**
     * Registers a callback function to be executed on the next time the event is fired only. This is similar to
     * calling {@link #on} followed by {@link #off} in the callback.
     *
     * the priority value the sooner the callback will be fired. Events having the same priority are called in the
     * order they were added.
     */
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    /**
     * Stops executing the callback on the given event.
     * Shorthand for {@link #stopListening `this.stopListening( this, event, callback )`}.
     *
     */
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    /**
     * Registers a callback function to be executed when an event is fired in a specific (emitter) object.
     *
     * Events can be grouped in namespaces using `:`.
     * When namespaced event is fired, it additionally fires all callbacks for that namespace.
     *
     *  // myEmitter.on( ... ) is a shorthand for myEmitter.listenTo( myEmitter, ... ).
     *  myEmitter.on( 'myGroup', genericCallback );
     *  myEmitter.on( 'myGroup:myEvent', specificCallback );
     *
     *  // genericCallback is fired.
     *  myEmitter.fire( 'myGroup' );
     *  // both genericCallback and specificCallback are fired.
     *  myEmitter.fire( 'myGroup:myEvent' );
     *  // genericCallback is fired even though there are no callbacks for "foo".
     *  myEmitter.fire( 'myGroup:foo' );
     *
     * An event callback can {@link module:utils/eventinfo~EventInfo#stop stop the event} and
     * set the {@link module:utils/eventinfo~EventInfo#return return value} of the {@link #fire} method.
     *
     * the priority value the sooner the callback will be fired. Events having the same priority are called in the
     * order they were added.
     */
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    /**
     * Stops listening for events. It can be used at different levels:
     *
     * * To stop listening to a specific callback.
     * * To stop listening to a specific event.
     * * To stop listening to all events fired by a specific object.
     * * To stop listening to all events fired by all objects.
     *
     * for all events from `emitter`.
     * `event`.
     */
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    /**
     * Fires an event, executing all callbacks registered for it.
     *
     * The first parameter passed to callbacks is an {@link module:utils/eventinfo~EventInfo} object,
     * followed by the optional `args` provided in the `fire()` method call.
     *
     * through modification of the {@link module:utils/eventinfo~EventInfo#return `evt.return`}'s property (the event info
     * is the first param of every callback).
     */
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    /**
     * Delegates selected events to another {@link module:utils/emittermixin~Emitter}. For instance:
     *
     *  emitterA.delegate( 'eventX' ).to( emitterB );
     *  emitterA.delegate( 'eventX', 'eventY' ).to( emitterC );
     *
     * then `eventX` is delegated (fired by) `emitterB` and `emitterC` along with `data`:
     *
     *  emitterA.fire( 'eventX', data );
     *
     * and `eventY` is delegated (fired by) `emitterC` along with `data`:
     *
     *  emitterA.fire( 'eventY', data );
     *
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
