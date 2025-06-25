/**
 * OriginalEventData contains original event info used for attribution passback event or generalized value optimization(GVO).
 */
export default class OriginalEventData {
    _event_name: string;
    _event_time: number;
    /**
    * @param {String} event_name A Meta pixel Standard Event or Custom Event name.
    * @param {Number} event_time A Unix timestamp in seconds indicating when the original event occurred.
     */
    constructor(event_name?: string, event_time?: number);
    /**
    * Gets the Event Name for the current Event.
    */
    get event_name(): string;
    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name a Meta pixel Standard Event or Custom Event name.
     */
    set event_name(event_name: string);
    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name Meta pixel Standard Event or Custom Event name.
     */
    setEventName(event_name: string): OriginalEventData;
    /**
     * Gets the Event Time when the original Event happened.
     */
    get event_time(): number;
    /**
     * Sets the Event Time when the original Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the original event occurred.
     */
    set event_time(event_time: number);
    /**
     * Sets the Event Time when the original Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the original event occurred.
     */
    setEventTime(event_time: number): OriginalEventData;
    /**
    * Returns the normalized payload for the original event data.
    * @returns {Object} normalized original event data payload.
    */
    normalize(): Record<string, any>;
}
