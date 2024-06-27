/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import Page from './../page';
import Event from './event';
import EventResponse from './event-response';
import FacebookAdsApi from './../../api';

/**
 * EventRequest for Business Data API
 */

export default class EventRequest {
    _access_token: string;
    _page_id: string;
    _events: Array < Event > ;
    _partner_agent: ? string;
    _api: Object;

    /**
     * @param {String} access_token Access Token for the user calling Graph API
     * @param {String} page_id Page Id to which you are sending the events
     * @param {Array<Event>} events Data for the request Payload for a Business Data Event
     * @param {String} partner_agent Platform from which the event is sent e.g. Zapier
     */
    constructor(access_token: string, page_id: string, events: Array < Event > = [],
        partner_agent: ? string = null) {
        this._access_token = access_token;
        this._page_id = page_id;
        this._events = events;
        this._partner_agent = partner_agent;

        this._api = FacebookAdsApi.init(this._access_token);
    }

    /**
     * Gets the data for the request Payload for a Business Data Event.
     */
    get events(): Array<Event> {
        return this._events;
    }

    /**
     * Sets the events for the request Payload for a Business Data Event.
     * @param events for the current event
     */
    set events(events: Array < Event > ) {
        this._events = events;
    }

    /**
     * Sets the events for the request Payload for a Business Data Event.
     * @param events for the current event
     */
    setEvents(events: Array < Event > ): EventRequest {
        this._events = events;
        return this;
    }

    /**
     * Gets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     */
    get partner_agent(): ?string {
        return this._partner_agent;
    }

    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    set partner_agent(partner_agent: string) {
        this._partner_agent = partner_agent;
    }

    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    setPartnerAgent(partner_agent: string): EventRequest {
        this._partner_agent = partner_agent;
        return this;
    }

    /**
     * Gets the access token for the Graph API request
     */
    get access_token(): string {
        return this._access_token;
    }

    /**
     * Sets the access token for the Graph API request
     * @param access_token string representing the access token that is used to make the Graph API.
     */
    set access_token(access_token: string) {
        this._access_token = access_token;
    }

    /**
     * Sets the access token for the Graph API request
     * @param {String} access_token string representing the access token that is used to make the Graph API.
     */
    setAccessToken(access_token: string): EventRequest {
        this._access_token = access_token;
        return this;
    }

    /**
     * Gets the page id against which we send the events
     */
    get page_id(): string {
        return this._page_id;
    }

    /**
     * Sets the page id against which we send the events
     * @param {String} page_id string value representing the page id to which you are sending the events.
     */
    set page_id(page_id: string) {
        this._page_id = page_id;
    }

    /**
     * Sets the page id against which we send the events
     * @param {String} page_id string value representing the page id to which you are sending the events.
     */
    setPageId(page_id: string): EventRequest {
        this._page_id = page_id;
        return this;
    }

    /**
     * Executes the current event_request data by making a call to the Facebook Graph API.
     */
    execute(): Promise < EventResponse > {
        const events_json = this._events.map(event => event.toJson());
        const params = {
            'data': events_json,
            'partner_agent': this._partner_agent,
            'access_token': this._access_token,
        };

        const pagePromise = (new Page(this._page_id)).createBusinessDatum(
            [],
            params
        );

        return pagePromise.then(response => {
            return new EventResponse(
                response._data['events_received'],
                response._data['events_dropped'],
                response._data['message']
            );
        });
    }
}
