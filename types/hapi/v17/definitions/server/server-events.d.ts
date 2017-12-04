import Podium = require("../../../../podium/index");

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
