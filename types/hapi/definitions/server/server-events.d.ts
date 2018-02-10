import * as Podium from "podium";

/**
 * an event name string.
 * an event options object.
 * a podium emitter object.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents)
 */
export type ServerEventsApplication = string | ServerEventsApplicationObject | Podium;

/**
 * Object that it will be used in Event
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents)
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
 * A criteria object with the following optional keys (unless noted otherwise):
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
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
 * Access: podium public interface.
 * The server events emitter. Utilizes the podium with support for event criteria validation, channels, and filters.
 * Use the following methods to interact with server.events:
 * [server.event(events)](https://github.com/hapijs/hapi/blob/master/API.md#server.event()) - register application events.
 * [server.events.emit(criteria, data)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.emit()) - emit server events.
 * [server.events.on(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) - subscribe to all events.
 * [server.events.once(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.once()) - subscribe to
 * Other methods include: server.events.removeListener(name, listener), server.events.removeAllListeners(name), and server.events.hasListeners(name).
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
 */
export interface ServerEvents extends Podium {

    /**
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
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsemitcriteria-data)
     */
    emit(criteria: string, data: any | Function): Promise<void>;
    emit(criteria: {name: string, channel?: string, tags?: string | string[]}, data: any): Promise<void>;

    /**
     * Subscribe to an event where:
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
     * See ['log' event](https://github.com/hapijs/hapi/blob/master/API.md#-log-event)
     * See ['request' event](https://github.com/hapijs/hapi/blob/master/API.md#-request-event)
     * See ['response' event](https://github.com/hapijs/hapi/blob/master/API.md#-response-event)
     * See ['route' event](https://github.com/hapijs/hapi/blob/master/API.md#-route-event)
     * See ['start' event](https://github.com/hapijs/hapi/blob/master/API.md#-start-event)
     * See ['stop' event](https://github.com/hapijs/hapi/blob/master/API.md#-stop-event)
     */
    on(criteria: string | ServerEventsApplicationObject | ServerEventCriteria, listener: Function): void;

    /**
     * Same as calling [server.events.on()](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) with the count option set to 1.
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener)
     */
    once(criteria: string | ServerEventsApplicationObject | ServerEventCriteria, listener: Function): void;

    /**
     * Same as calling server.events.on() with the count option set to 1.
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @return Return value: a promise that resolves when the event is emitted.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsoncecriteria)
     */
    once(criteria: string | ServerEventsApplicationObject | ServerEventCriteria): Promise<any>;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovelistenername-listener)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    removeListener(name: string, listener: Podium.Listener): Podium;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovealllistenersname)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    removeAllListeners(name: string): Podium;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumhaslistenersname)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    hasListeners(name: string): boolean;

}
