// Type definitions for podium 1.0
// Project: https://github.com/hapijs/podium
// Definitions by: AJP <https://github.com/AJamesPhillips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Podium
 * Node (semi) compatible event emitter with extra features.
 * podium is an event emitter with support for tags, filters, channels, event update cloning, arguments spreading, and other features useful when building large scale applications. While node's native EventEmitter is strictly focused on maximum performance, it lacks many features that do not belong in the core implementation. podium is not restricted by node's performance requirement as it is designed for application layer needs where it's overhead is largely insignificant as implementing these features will have similar cost on top of the native emitter.
 * @see {@link https://github.com/hapijs/podium}
 */
interface Podium {
    /**
     * Creates a new podium emitter
     * @param events  if present, the value is passed to podium.registerEvent().
     */
    new(events?: Podium.Events[]): Podium;
    new(events?: Podium.Events): Podium;

    /**
     * podium.registerEvent(events)
     * Register the specified events and their optional configuration. Events must be registered before they can be emitted or subscribed to. This is done to detect event name mispelling and invalid event activities.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumregistereventevents}
     */
    registerEvent(events: Podium.Events[]): void;
    registerEvent(events: Podium.Events): void;

    /**
     * podium.registerPodium(podiums)
     * Registers another emitter as an event source for the current emitter (any event update emitted by the source emitter is passed to any subscriber of the current emitter)
     * Note that any events registered with a source emitter are automatically added to the current emitter. If the events are already registered, they are left as-is.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumregisterpodiumpodiums}
     */
    registerPodium(podiums: Podium[]): void;
    registerPodium(podiums: Podium): void;

    /**
     * podium.emit(criteria, data, [callback])
     * Emits an event update to all the subscribed listeners
     * @param criteria  the event update criteria
     * @param data  the value emitted to the subscribers.
     * @param callback  an optional callback method invoked when all subscribers have been notified using the signature function()
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumemitcriteria-data-callback}
     */
    emit(criteria: string | {name: string, channel?: string, tags?: string | string[]}, data: any, callback?: (() => void)): void;

    /**
     * podium.on(criteria, listener)
     * Subscribe a handler to an event
     * @param criteria  the subscription criteria
     * @param listener  the handler method set to receive event updates. The function signature depends on the block, spread, and tags options.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    on(criteria: string | Podium.Criteria, listener: Podium.Listener): void;

    /**
     * podium.addListener(criteria, listener)
     * Same as podium.on()
     * @param criteria  the subscription criteria
     * @param listener  the handler method set to receive event updates. The function signature depends on the block, spread, and tags options.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    addListener(criteria: string | Podium.Criteria, listener: Podium.Listener): void;

    /**
     * podium.once(criteria, listener)
     * Same as podium.on() with the count option set to 1.
     * @param criteria  the subscription criteria
     * @param listener  the handler method set to receive event updates. The function signature depends on the block, spread, and tags options.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    once(criteria: string | Podium.Criteria, listener: Podium.Listener): void;

    /**
     * podium.removeListener(name, listener)
     * Removes all listeners subscribed to a given event name matching the provided listener method where:
     * @param name  the event name string.
     * @param listener  the function reference provided when subscribed.
     * Returns a reference to the current emitter.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumremovelistenername-listener}
     */
    removeListener(name: string, listener: Podium.Listener): Podium;

    /**
     * podium.removeAllListeners(name)
     * Removes all listeners subscribed to a given event name
     * @param name  the event name string.
     * Returns a reference to the current emitter.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumremovealllistenersname}
     */
    removeAllListeners(name: string): Podium;

    /**
     * podium.hasListeners(name)
     * Returns whether an event has any listeners subscribed
     * @param name  the event name string.
     * Returns true if the event name has any listeners, otherwise false.
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumhaslistenersname}
     */
    hasListeners(name: string): boolean;
}

declare namespace Podium {
    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumregistereventevents}
     */
    export type Events = string | EventOptionsObject | Podium;

    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumregistereventevents}
     */
    export interface EventOptionsObject {
        /** the event name string (required). */
        name: string;
        /** a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not). */
        channels?: string | string[];
        /** if true, the data object passed to podium.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is). */
        clone?: boolean;
        /** if true, the data object passed to podium.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type). */
        spread?: boolean;
        /** if true and the criteria object passed to podium.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end (but before the callback argument if block is set). A configuration override can be set by each listener. Defaults to false. */
        tags?: boolean;
        /** if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first configuration is used. Defaults to false (a duplicate registration will throw an error). */
        shared?: boolean;
    }

    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumaddlistenercriteria-listener}
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncecriteria-listener}
     */
    export interface CriteriaObject {
        /** the event name string (required). */
        name: string;
        /** if true, the listener method receives an additional callback argument which must be called when the method completes. No other event will be emitted until the callback methods is called. The method signature is function(). If block is set to a positive integer, the value is used to set a timeout after which any pending events will be emitted, ignoring the eventual call to callback. Defaults to false (non blocking). */
        block?: boolean | number;
        /** a string or array of strings specifying the event channels to subscribe to. If the event registration specified a list of allowed channels, the channels array must match the allowed channels. If channels are specified, event updates without any channel designation will not be included in the subscription. Defaults to no channels filter. */
        channels?: string | string[];
        /** if true, the data object passed to podium.emit() is cloned before it is passed to the listener method. Defaults to the event registration option (which defaults to false). */
        clone?: boolean;
        /** a positive integer indicating the number of times the listener can be called after which the subscription is automatically removed. A count of 1 is the same as calling podium.once(). Defaults to no limit. */
        count?: number;
        /**
         * the event tags (if present) to subscribe to which can be one of:
         *  * a tag string.
         *  * an array of tag strings.
         *  * an object with the following:
         */
        filter?: string | string[] | CriteriaFilterOptionsObject;
        /** if true, and the data object passed to podium.emit() is an array, the listener method is called with each array element passed as a separate argument. This should only be used when the emitted data structure is known and predictable. Defaults to the event registration option (which defaults to false). */
        spread?: boolean;
        /** if true and the criteria object passed to podium.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end (but before the callback argument if block is set). Defaults to the event registration option (which defaults to false). */
        tags?: boolean;
        /** the handler method set to receive event updates. The function signature depends on the block, spread, and tags options. */
        listener?: Listener;
    }

    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    export interface CriteriaFilterOptionsObject {
        /** a tag string or array of tag strings. */
        tags?: string | string[];
        /** if true, all tags must be present for the event update to match the subscription. Defaults to false (at least one matching tag). */
        all?: boolean;
    }

    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    export type Criteria = string | CriteriaObject;

    /**
     * @see {@link https://github.com/hapijs/podium/blob/master/API.md#podiumoncriteria-listener}
     */
    export interface Listener {
    (data: any, tags?: Tags, callback?: () => void): void;
    }

    export type Tags = {[tag: string]: boolean};
}

declare var Podium: Podium;

export = Podium;
