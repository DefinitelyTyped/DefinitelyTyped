/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */


import BusinessDataEventRequest from '../businessdataapi/event-request';
import ServerEventRequest from '../serverside/event-request';
import FacebookAdsApi from './../../api';
import HttpServiceInterface from '../serverside/http-service-interface';

import SignalEvent from './event';
import ServerEventResponse from '../serverside/event-response';

import Utils from './utils';

/**
 * EventRequest
 */
export default class EventRequest {

    _business_data_event_request: BusinessDataEventRequest;
    _server_event_request: ServerEventRequest;

    /**
     * @param {String} access_token Access Token for the user calling Graph API
     * @param {String} pixel_id Pixel Id to which you are sending the events
     * @param {String} page_id Page Id to which you are sending the events
     * @param {Array<SignalEvent>} events Data for the request Payload for a Server Side Event
     * @param {?String} partner_agent Platform from which the event is sent e.g. wordpress
     * @param {?String} test_event_code Test Event Code used to verify that your server events are received correctly by Facebook.
     * @param {?String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     * @param {?String} upload_id Unique id used to denote the current set being uploaded.
     * @param {?String} upload_tag Tag string added to track your Offline event uploads.
     * @param {?String} upload_source The origin/source of data for the dataset to be uploaded.
     * @param {Boolean} debug_mode_flag Set to true if you want to enable more logging in SDK
     * @param {?HttpServiceInterface} http_service Override the default http request method by setting an object that implements HttpServiceInterface
     */
    constructor(access_token: string, pixel_id: string, page_id: string, events: Array < SignalEvent > = [],
        partner_agent: ? string = null, test_event_code : ? string = null,
        namespace_id : ? string = null, upload_id : ? string = null,
        upload_tag : ? string = null, upload_source : ? string = null,
        debug_mode_flag : bool = false, http_service: ? HttpServiceInterface = null) {
        const business_data_events = events.map(event => event.business_data_event);
        this._business_data_event_request = new BusinessDataEventRequest(
            access_token,
            page_id,
            business_data_events,
            partner_agent
        );

        const server_events = events.map(event => event.server_event);
        this._server_event_request = new ServerEventRequest(
            access_token,
            pixel_id,
            server_events,
            partner_agent,
            test_event_code,
            namespace_id,
            upload_id,
            upload_tag,
            upload_source,
            debug_mode_flag,
            http_service,
        );
    }

    /**
     * Gets the data for the request Payload for a Server Side Event and Business Data Event.
     */
    get events() {
        return Utils.constructResponse(this._server_event_request.events, this._business_data_event_request.events);
    }

    /**
     * Sets the events for the request Payload for a Server Side Event and Business Data Event.
     * @param events for the current event
     */
    set events(events: Array < SignalEvent > ) {
        const business_data_events = events.map(event => event.business_data_event);
        const server_events = events.map(event => event.server_event);
        this._server_event_request.events = server_events;
        this._business_data_event_request.events = business_data_events;
    }

    /**
     * Sets the events for the request Payload for a Server Side Event and Business Data Event.
     * @param {Array<SignalEvent>} events for the current event
     */
    setEvents(events: Array < SignalEvent > ): EventRequest {
        const business_data_events = events.map(event => event.business_data_event);
        const server_events = events.map(event => event.server_event);
        this._server_event_request.events = server_events;
        this._business_data_event_request.events = business_data_events;
        return this;
    }

    /**
     * Gets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress, Zapier
     */
    get partner_agent() {
        return Utils.constructResponse(this._server_event_request.partner_agent, this._business_data_event_request.partner_agent);
    }

    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress, Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    set partner_agent(partner_agent: string) {
        this._server_event_request.partner_agent = partner_agent;
        this._business_data_event_request.partner_agent = partner_agent;
    }

    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress
     * @param {String} partner_agent String value for the partner agent
     */
    setPartnerAgent(partner_agent: string): EventRequest {
        this._server_event_request.partner_agent = partner_agent;
        this._business_data_event_request.partner_agent = partner_agent;
        return this;
    }

    /**
     * Gets the test_event_code for the request
     */
    get test_event_code() {
        return Utils.constructResponse(this._server_event_request.partner_agent, null);
    }

    /**
     * Sets the test_event_code for the request
     */
    set test_event_code(test_event_code: string) {
        this._server_event_request.test_event_code = test_event_code;
    }

    /**
     * Sets the test_event_code for the request
     */
    setTestEventCode(test_event_code: string): EventRequest {
        this._server_event_request.test_event_code = test_event_code;
        return this;
    }

    /**
     * Gets the debug mode flag for the Graph API request
     */
    get debug_mode() {
        return Utils.constructResponse(this._server_event_request.debug_mode, null);

    }

    /**
     * Sets the debug mode flag for the Graph API request
     * @param debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
     */
    set debug_mode(debug_mode: boolean) {
        this._server_event_request.debug_mode = debug_mode;
    }

    /**
     * Sets the debug mode flag for the Graph API request
     * @param {Boolean} debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
     */
    setDebugMode(debug_mode: boolean): EventRequest {
        this._server_event_request.debug_mode = debug_mode;
        return this;
    }

    /**
     * Gets the access token for the Graph API request
     */
    get access_token() {
        return Utils.constructResponse(this._server_event_request.access_token, this._business_data_event_request.access_token);
    }

    /**
     * Sets the access token for the Graph API request
     * @param access_token string representing the access token that is used to make the Graph API.
     */
    set access_token(access_token: string) {
        this._server_event_request.access_token = access_token;
        this._business_data_event_request.access_token = access_token;
    }

    /**
     * Sets the access token for the Graph API request
     * @param {String} access_token string representing the access token that is used to make the Graph API.
     */
    setAccessToken(access_token: string): EventRequest {
        this._server_event_request.access_token = access_token;
        this._business_data_event_request.access_token = access_token;
        return this;
    }

    /**
     * Gets the pixel against which we send the events
     */
    get pixel_id() {
        return Utils.constructResponse(this._server_event_request.pixel, null);
    }

    /**
     * Sets the pixel against which we send the events
     * @param {String} pixel_id string value representing the Pixel's Id to which you are sending the events.
     */
    set pixel_id(pixel_id: string) {
        this._server_event_request.pixel_id = pixel_id;
    }

    /**
     * Sets the pixel against which we send the events
     * @param {String} pixel_id String value for the pixel_id against which you want to send the events.
     */
    setPixelId(pixel_id: string): EventRequest {
        this._server_event_request.pixel_id = pixel_id;
        return this;
    }

    /* Region Offline Conversion Fields */
    /**
     * Gets the NamespaceId for the events
     */
    get namespace_id() {
        return Utils.constructResponse(this._server_event_request.namespace_id, null);
    }

    /**
     * Sets the namespace_id for the events
     * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     */
    set namespace_id(namespace_id: string) {
        this._server_event_request.namespace_id = namespace_id;
    }

    /**
     * Sets the namespace_id for the events
     * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     */
    setNamespaceId(namespace_id: string): EventRequest {
        this._server_event_request.namespace_id = namespace_id;
        return this;
    }

    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_tag() {
        return Utils.constructResponse(this._server_event_request.upload_tag, null);
    }

    /**
     * Sets the upload_tag for the current events upload
     * @param {String} upload_tag Tag string added to Track your Offline event uploads
     */
    set upload_tag(upload_tag: string) {
        this._server_event_request.upload_tag = upload_tag;
    }

    /**
     * Sets the upload_tag for the current events upload
     * @param {String} upload_tag Tag string added to Track your Offline event uploads
     */
    setUploadTag(upload_tag: string): EventRequest {
        this._server_event_request.upload_tag = upload_tag;
        return this;
    }

    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_id() {
        return Utils.constructResponse(this._server_event_request.upload_id, null);
    }

    /**
     * Sets the upload_id for the current events upload
     * @param {String} upload_id Unique id used to denote the current set being uploaded
     */
    set upload_id(upload_id: string) {
        this._server_event_request.upload_id = upload_id;
    }

    /**
     * Sets the upload_id for the current events upload
     * @param {String} upload_id Unique id used to denote the current set being uploaded
     */
    setUploadId(upload_id: string): EventRequest {
        this._server_event_request.upload_id = upload_id;
        return this;
    }

    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_source() {
        return Utils.constructResponse(this._server_event_request.upload_source, null);
    }

    /**
     * Sets the upload_source for the current events upload
     * @param {String} upload_source origin/source of data for the dataset to be uploaded.
     */
    set upload_source(upload_source: string) {
        this._server_event_request.upload_source = upload_source;
    }

    /**
     * Sets the upload_source for the current events upload
     * @param {String} upload_source origin/source of data for the dataset to be uploaded.
     */
    setUploadSource(upload_source: string): EventRequest {
        this._server_event_request.upload_source = upload_source;
        return this;
    }

    /**
     * Gets the http_service object for making the events request
     */
    get http_service() {
        return Utils.constructResponse(this._server_event_request.http_service, null);
    }

    /**
     * Sets the http_service object for making the events request
     * @param {HttpServiceInterface} http_service
     */
    set http_service(http_service: HttpServiceInterface) {
        this._server_event_request.http_service = http_service;
    }

    /**
     * Sets the http_service object for making the events request
     * @param {HttpServiceInterface} http_service
     */
    setHttpService(http_service: HttpServiceInterface): EventRequest {
        this._server_event_request.http_service = http_service;
        return this;
    }

    /**
     * Executes the current event_request data by making a call to the Facebook Graph API.
     */
    execute(): Promise < Object > {
        return Promise.all([
            this._server_event_request.execute().catch(Error),
            this._business_data_event_request.execute().catch(Error)
        ]).then(response => {
            return Utils.constructResponse(
                response[0],
                response[1],
            )
        });
    }
}
