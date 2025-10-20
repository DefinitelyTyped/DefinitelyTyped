/**
 * OriginalEventData contains original event info used for attribution passback event or generalized value optimization(GVO).
 */
export default class OriginalEventData {
    _event_name: string;
    _event_time: number;
    _order_id: string;
    _event_id: string;
    /**
    * @param {String} event_name A Meta pixel Standard Event or Custom Event name.
    * @param {Number} event_time A Unix timestamp in seconds indicating when the original event occurred.
    * @param {String} order_id The order ID for this transaction as a string.
    * @param {String} event_id A unique string chosen by the advertiser.
     */
    constructor(event_name?: string, event_time?: number, order_id?: string, event_id?: string);
    /**
    * Gets the Event Name for the original Event.
    */
    get event_name(): string;
    /**
     * Sets the Event Name for the original Event.
     * @param {String} event_name a Meta pixel Standard Event or Custom Event name.
     */
    set event_name(event_name: string);
    /**
     * Sets the Event Name for the original Event.
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
     * Gets the order_id of original Event.
     */
    get order_id(): string;
    /**
     * Sets the Order ID for the original Event.
     * @param {String} order_id The order ID for this transaction as a string.
     */
    set order_id(order_id: string);
    /**
     * Sets the Order ID for the original Event.
     * @param {String} order_id The order ID for this transaction as a string.
     */
    setOrderID(order_id: string): OriginalEventData;
    /**
     * Gets the event_id of original Event.
     */
    get event_id(): string;
    /**
     * Sets the Event ID for the original Event.
     * @param {String} event_id A unique string chosen by the advertiser.
     */
    set event_id(event_id: string);
    /**
     * Sets the Event ID for the original Event.
     * @param {String} event_id A unique string chosen by the advertiser.
     */
    setEventID(event_id: string): OriginalEventData;
    /**
    * Returns the normalized payload for the original event data.
    * @returns {Object} normalized original event data payload.
    */
    normalize(): Record<string, any>;
}
