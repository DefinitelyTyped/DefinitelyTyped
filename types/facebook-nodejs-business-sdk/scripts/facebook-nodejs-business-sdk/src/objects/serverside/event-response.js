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
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters}
 */

export default class EventResponse {

	_events_received: number;
	_messages: Array<string>;
	_fbtrace_id: string;
	_id: string;
	_num_processed_entries: number;

	/**
	 * @param {Number} events_received
	 * @param {Array<string>} messages
	 * @param {String} fbtrace_id
	 * @param {String} id
	 * @param {Number} num_processed_entries
	 */
	constructor(events_received: number, messages: Array<string>, fbtrace_id: string, id: string, num_processed_entries: number)  {

		this._events_received = events_received;
		this._messages = messages;
		this._fbtrace_id = fbtrace_id;
		this._id = id;
		this._num_processed_entries = num_processed_entries;
	}

	/**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @return events_received representing the number of events received for the event Request
	 */
	get  events_received()  {
		return  this._events_received;
	}

	/**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @param events_received representing the number of events received for the event Request
	 */
	set  events_received(events_received: number)  {
		this._events_received = events_received;
	}

    /**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @param {Number} events_received representing the number of events received for the event Request
	 */
	setEventsReceived(events_received: number) : EventResponse {
		this._events_received = events_received;
        return this;
	}


	/**
	 * Sets the messages as array for the response received from Graph API.
	 * @return messages in the event Response
	 */
	get  messages()  {
		return this._messages;
	}

	/**
	 * Sets the messages as array for the response received from Graph API.
	 * @param messages in the event Response
	 */
	set messages(messages: Array<string>)  {
		this._messages = messages;
	}

    /**
	 * Sets the messages as array for the response received from Graph API.
	 * @param {Array} messages in the event Response
	 */
	setMessages(messages: Array<string>)  : EventResponse {
		this._messages = messages;
        return this;
	}

	/**
	 * Gets the fbtrace_id for the response received from Graph API.
	 * @return fbtrace_id in the event Response that can used for debugging purposes
	 */
	get  fbtrace_id()  {
		return this._fbtrace_id;
	}

	/**
	 * Sets the fbtrace_id for the response received from Graph API.
	 * @param fbtrace_id in the event Response that can used for debugging purposes
	 */
	set fbtrace_id(fbtrace_id: string)  {
		this._fbtrace_id = fbtrace_id;
	}

    /**
	 * Sets the fbtrace_id for the response received from Graph API.
	 * @param {String} fbtrace_id in the event Response that can used for debugging purposes
	 */
	setFbtraceId(fbtrace_id: string)  : EventResponse {
		this._fbtrace_id = fbtrace_id;
        return this;
	}

	/**
	 * Gets the id of container to which the event request was successfully posted to.
	 * @return id of the dataset
	 */
	get  id()  {
		return this._id;
	}

	/**
	 * Sets the id of container to which the event request was successfully posted to.
	 * @param  id of the dataset
	 */
	set id(id: string)  {
		this._id = id;
	}

  /**
	 * Sets the id of container to which the event request was successfully posted to.
	 * @param {String} id in the event Response that can used for debugging purposes
	 */
	setId(id: string)  : EventResponse {
		this._id = id;
    return this;
	}

	/**
	 * Gets the number of events that got posted as part of the original request.
	 * @return num_processed_entries number of events posted to the dataset.
	 */
	get  num_processed_entries()  {
		return this._num_processed_entries;
	}

	/**
	 * Sets the number of events that got posted as part of the original request.
	 * @param num_processed_entries number of events posted to the dataset.
	 */
	set num_processed_entries(num_processed_entries: number)  {
		this._num_processed_entries = num_processed_entries;
	}

    /**
	 * Sets the number of events that got succesfully posted as part of the original request.
	 * @param {Number} num_processed_entries number of events posted to the dataset.
	 */
	setId(num_processed_entries: number)  : EventResponse {
		this._num_processed_entries = num_processed_entries;
    return this;
	}
}
