/**
 * EventResponse
 */
export default class EventResponse {
    _events_received: number;
    _events_dropped: number;
    _message: Array<Record<any, any>>;
    /**
     * @param {Number} events_received
     * @param {Number} events_dropped
     * @param {Array<Object>} message
     */
    constructor(events_received: number, events_dropped: number, message?: Array<Record<any, any>>);
    /**
     * Gets the events received number from the Graph API Response.
     */
    get events_received(): number;
    /**
     * Sets the events received number for the Graph API Response.
     * events_received is represented by integer.
     * @param events_received representing the number of events received for the event Request
     */
    set events_received(events_received: number);
    /**
     * Sets the events received number for the Graph API Response.
     * events_received is represented by integer.
     * @param {Number} events_received representing the number of events received for the event Request
     */
    setEventsReceived(events_received: number): EventResponse;
    /**
     * Gets the events dropped number from the Graph API Response.
     */
    get events_dropped(): number;
    /**
     * Sets the events dropped number for the Graph API Response.
     * events_dropped is represented by integer.
     * @param events_dropped representing the number of events dropped during events processing
     */
    set events_dropped(events_dropped: number);
    /**
     * Sets the events dropped number for the Graph API Response.
     * events_dropped is represented by integer.
     * @param {Number} events_dropped representing the number of events dropped during events processing
     */
    setEventsDropped(events_dropped: number): EventResponse;
    /**
     * Gets the messages from the response received from Graph API.
     * @return messages in the event Response
     */
    get message(): Array<Record<any, any>>;
    /**
     * Sets the messages as array for the response received from Graph API.
     * @param message in the event Response
     */
    set message(message: Array<Record<any, any>>);
    /**
     * Sets the messages as array for the response received from Graph API.
     * @param {Array} message in the event Response
     */
    setMessage(message: Array<Record<any, any>>): EventResponse;
}
