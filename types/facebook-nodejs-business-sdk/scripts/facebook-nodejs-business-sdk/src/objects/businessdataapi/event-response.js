/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * EventResponse
 */

export default class EventResponse {

    _events_received: number;
    _events_dropped: number;
    _message: Array < Object > ;

    /**
     * @param {Number} events_received
     * @param {Number} events_dropped
     * @param {Array<Object>} message
     */
    constructor(events_received: number, events_dropped: number, message: Array < Object > = []) {
        this._events_received = events_received;
        this._events_dropped = events_dropped;
        this._message = message;
    }

    /**
     * Gets the events received number from the Graph API Response.
     */
    get events_received(): number {
        return this._events_received;
    }

    /**
     * Sets the events received number for the Graph API Response.
     * events_received is represented by integer.
     * @param events_received representing the number of events received for the event Request
     */
    set events_received(events_received: number) {
        this._events_received = events_received;
    }

    /**
     * Sets the events received number for the Graph API Response.
     * events_received is represented by integer.
     * @param {Number} events_received representing the number of events received for the event Request
     */
    setEventsReceived(events_received: number): EventResponse {
        this._events_received = events_received;
        return this;
    }

    /**
     * Gets the events dropped number from the Graph API Response.
     */
    get events_dropped(): number {
        return this._events_dropped;
    }

    /**
     * Sets the events dropped number for the Graph API Response.
     * events_dropped is represented by integer.
     * @param events_dropped representing the number of events dropped during events processing
     */
    set events_dropped(events_dropped: number) {
        this._events_dropped = events_dropped;
    }

    /**
     * Sets the events dropped number for the Graph API Response.
     * events_dropped is represented by integer.
     * @param {Number} events_dropped representing the number of events dropped during events processing
     */
    setEventsDropped(events_dropped: number): EventResponse {
        this._events_dropped = events_dropped;
        return this;
    }


    /**
     * Gets the messages from the response received from Graph API.
     * @return messages in the event Response
     */
    get message(): Array<Object> {
        return this._message;
    }

    /**
     * Sets the messages as array for the response received from Graph API.
     * @param message in the event Response
     */
    set message(message: Array < Object > ) {
        this._message = message;
    }

    /**
     * Sets the messages as array for the response received from Graph API.
     * @param {Array} message in the event Response
     */
    setMessage(message: Array < Object > ): EventResponse {
        this._message = message;
        return this;
    }

}
