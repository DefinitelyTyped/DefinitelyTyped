import Podium = require("../../../../podium/index");

/**
 * an event name string.
 * an event options object.
 * a podium emitter object.
 */
export type ServerEventsApplication = string | ServerEventsApplicationObject | Podium;

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents)
 * Object that it will be used in Event
 */
export interface ServerEventsApplicationObject {
    /** the event name string (required). */
    name: string;
    /** a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not). */
    channels?: string | string[];
    /** if true, the data object passed to server.events.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is). */
    clone?: boolean;
    /** if true, the data object passed to server.event.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type). */
    spread?: boolean;
    /** if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end. A configuration override can be set by each listener. Defaults to false. */
    tags?: boolean;
    /** if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first configuration is used. Defaults to false (a duplicate registration will throw an error). */
    shared?: boolean;
}

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
 * a criteria object with the following optional keys (unless noted otherwise):
 */
export interface ServerEventCriteria {
    /** (required) the event name string. */
    name: string;
    /** a string or array of strings specifying the event channels to subscribe to. If the event registration specified a list of allowed channels, the channels array must match the allowed channels. If channels are specified, event updates without any channel designation will not be included in the subscription. Defaults to no channels filter. */
    channels?: string | string[];
    /** if true, the data object passed to server.event.emit() is cloned before it is passed to the listener method. Defaults to the event registration option (which defaults to false). */
    clone?: boolean;
    /** a positive integer indicating the number of times the listener can be called after which the subscription is automatically removed. A count of 1 is the same as calling server.events.once(). Defaults to no limit. */
    count?: number;
    /**
     * filter - the event tags (if present) to subscribe to which can be one of:
     * * a tag string.
     * * an array of tag strings.
     * * an object with the following:
     * * * tags - a tag string or array of tag strings.
     * * * all - if true, all tags must be present for the event update to match the subscription. Defaults to false (at least one matching tag).
     */
    filter?: string | string[] | {tags: string | string[], all?: boolean};
    /** if true, and the data object passed to server.event.emit() is an array, the listener method is called with each array element passed as a separate argument. This should only be used when the emitted data structure is known and predictable. Defaults to the event registration option (which defaults to false). */
    spread?: boolean;
    /** if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end. Defaults to the event registration option (which defaults to false). */
    tags?: boolean;
}

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
 * Access: podium public interface.
 * The server events emitter. Utilizes the podium with support for event criteria validation, channels, and filters.
 */
export interface ServerEvents {

    /**
     * Register custom application events where:
     * @param events - must be one of:
     * * an event name string.
     * * an event options object with the following optional keys (unless noted otherwise):
     * * * name - the event name string (required).
     * * * channels - a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not).
     * * * clone - if true, the data object passed to server.events.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is).
     * * * spread - if true, the data object passed to server.event.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type).
     * * * tags - if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end. A configuration override can be set by each listener. Defaults to false.
     * * * shared - if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first configuration is used. Defaults to false (a duplicate registration will throw an error).
     * * a podium emitter object.
     * * an array containing any of the above.
     * @return Return value: none.
     */
    event(events: ServerEventsApplication): void;
    event(events: ServerEventsApplication[]): void;

    events: {

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsemitcriteria-data)
         * Emits a custom application event to all the subscribed listeners where:
         * @param criteria - the event update criteria which must be one of:
         * * the event name string.
         * * an object with the following optional keys (unless noted otherwise):
         * * * name - the event name string (required).
         * * * channel - the channel name string.
         * * * tags - a tag string or array of tag strings.
         * @param data - the value emitted to the subscribers. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
         * @return Return value: none.
         * Note that events must be registered before they can be emitted or subscribed to by calling server.event(events). This is done to detect event name misspelling and invalid event activities.
         */
        emit(criteria: string | {name: string, channel?: string, tags?: string | string[]}, data: any): void;

        /**
         *[See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
         * Subscribe to an event where:
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
         * @return Return value: none.
         */
        on(criteria: string, listener: Function): void;
        on(criteria: ServerEventsApplicationObject, listener: Function): void;
        on(criteria: ServerEventCriteria, listener: Function): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener)
         * Same as calling [server.events.on()](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) with the count option set to 1.
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
         * @return Return value: none.
         */
        once(criteria: string, listener: Function): void;
        once(criteria: ServerEventsApplicationObject, listener: Function): void;
        once(criteria: ServerEventCriteria, listener: Function): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsoncecriteria)
         * Same as calling server.events.on() with the count option set to 1.
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @return Return value: a promise that resolves when the event is emitted.
         */
        once(criteria: string): any;
        once(criteria: ServerEventsApplicationObject): any;
        once(criteria: ServerEventCriteria): any;

    }


    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposekey-value)
     * Used within a plugin to expose a property via server.plugins[name] where:
     * @param key - the key assigned (server.plugins[name][key]).
     * @param value - the value assigned.
     * @return Return value: none.
     */
    expose(key: string, value: any): void;

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposeobj)
     * Merges an object into to the existing content of server.plugins[name] where:
     * @param obj - the object merged into the exposed properties container.
     * @return Return value: none.
     * Note that all the properties of obj are deeply cloned into server.plugins[name], so avoid using this method
     * for exposing large objects that may be expensive to clone or singleton objects such as database client
     * objects. Instead favor server.expose(key, value), which only copies a reference to value.
     */
    expose(obj: Object): void;






    // TODO not ready yet


}
