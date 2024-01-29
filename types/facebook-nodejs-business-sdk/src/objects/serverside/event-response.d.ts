/**
 * EventResponse
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters}
 */
export default class EventResponse {
    _events_received: number;
    _messages: string[];
    _fbtrace_id: string;
    _id: string;
    _num_processed_entries: number;
    /**
     * @param {Number} events_received
     * @param {string[]} messages
     * @param {String} fbtrace_id
     * @param {String} id
     * @param {Number} num_processed_entries
     */
    constructor(events_received: number, messages: string[], fbtrace_id: string, id: string, num_processed_entries: number);
    /**
     * Sets the events received for the response received from Graph API.
     * events_received is represented by integer.
     * @return events_received representing the number of events received for the event Request
     */
    get events_received(): number;
    /**
     * Sets the events received for the response received from Graph API.
     * events_received is represented by integer.
     * @param events_received representing the number of events received for the event Request
     */
    set events_received(events_received: number);
    /**
     * Sets the events received for the response received from Graph API.
     * events_received is represented by integer.
     * @param {Number} events_received representing the number of events received for the event Request
     */
    setEventsReceived(events_received: number): EventResponse;
    /**
     * Sets the messages as array for the response received from Graph API.
     * @return messages in the event Response
     */
    get messages(): string[];
    /**
     * Sets the messages as array for the response received from Graph API.
     * @param messages in the event Response
     */
    set messages(messages: string[]);
    /**
     * Sets the messages as array for the response received from Graph API.
     * @param {Array} messages in the event Response
     */
    setMessages(messages: string[]): EventResponse;
    /**
     * Gets the fbtrace_id for the response received from Graph API.
     * @return fbtrace_id in the event Response that can used for debugging purposes
     */
    get fbtrace_id(): string;
    /**
     * Sets the fbtrace_id for the response received from Graph API.
     * @param fbtrace_id in the event Response that can used for debugging purposes
     */
    set fbtrace_id(fbtrace_id: string);
    /**
     * Sets the fbtrace_id for the response received from Graph API.
     * @param {String} fbtrace_id in the event Response that can used for debugging purposes
     */
    setFbtraceId(fbtrace_id: string): EventResponse;
    /**
     * Gets the id of container to which the event request was successfully posted to.
     * @return id of the dataset
     */
    get id(): string;
    /**
     * Sets the id of container to which the event request was successfully posted to.
     * @param  id of the dataset
     */
    set id(id: string);
    /**
     * Gets the number of events that got posted as part of the original request.
     * @return num_processed_entries number of events posted to the dataset.
     */
    get num_processed_entries(): number;
    /**
     * Sets the number of events that got posted as part of the original request.
     * @param num_processed_entries number of events posted to the dataset.
     */
    set num_processed_entries(num_processed_entries: number);
}
