/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import AdsPixel from './../ads-pixel';
import FacebookAdsApi from './../../api';
import EventResponse from './event-response';
import HttpMethod from './http-method';
import HttpServiceClientConfig from './http-service-client-config';
import HttpServiceInterface from './http-service-interface';
import ServerEvent from './server-event';

/**
 * EventRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters}
 */

export default class EventRequest {
	_access_token: string;
	_pixel_id: string;
	_events: Array<ServerEvent>;
	_partner_agent: ?string;
	_test_event_code: ?string;
	_namespace_id: ?string;
	_upload_id: ?string;
	_upload_tag: ?string;
	_upload_source: ?string;
	_debug_mode: bool;
	_api: Object;
	_http_service: ?HttpServiceInterface;

	/**
	 * @param {String} access_token Access Token for the user calling Graph API
	 * @param {String} pixel_id Pixel Id to which you are sending the events
	 * @param {Array<ServerEvent>} events Data for the request Payload for a Conversions API Event
	 * @param {?String} partner_agent Platform from which the event is sent e.g. wordpress
	 * @param {?String} test_event_code Test Event Code used to verify that your server events are received correctly by Facebook.
	 * @param {?String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
	 * @param {?String} upload_id Unique id used to denote the current set being uploaded.
	 * @param {?String} upload_tag Tag string added to track your Offline event uploads.
	 * @param {?String} upload_source The origin/source of data for the dataset to be uploaded.
	 * @param {Boolean} debug_mode_flag Set to true if you want to enable more logging in SDK
	 * @param {?HttpServiceInterface} http_service Override the default http request method by setting an object that implements HttpServiceInterface
	 */
	constructor(access_token: string, pixel_id: string, events: Array<ServerEvent> = [],
							partner_agent: ?string = null, test_event_code: ?string = null,
							namespace_id: ?string = null, upload_id: ?string = null,
							upload_tag: ?string = null, upload_source: ?string = null,
							debug_mode_flag: bool = false, http_service: ?HttpServiceInterface = null ) {
		this._access_token = access_token;
		this._pixel_id = pixel_id;
		this._events = events;
		this._partner_agent = partner_agent;
		this._test_event_code = test_event_code;
		this._namespace_id = namespace_id;
		this._upload_id = upload_id;
		this._upload_tag = upload_tag;
		this._upload_source = upload_source;
		this._debug_mode = debug_mode_flag;

		this._http_service = http_service;
		this._api = FacebookAdsApi.init(this._access_token);
	}

	/**
	 * Gets the data for the request Payload for a Conversions API Event. events is represented by a list/array of ServerEvent objects.
	 */
	get events() {
		return this._events;
	}

	/**
	 * Sets the events for the request Payload for a Conversions API Event.
	 * events is represented by a list/array of ServerEvent objects.
	 * @param events for the current server event
	 */
	set events(events: Array<ServerEvent>) {
		this._events = events;
	}

	/**
	 * Sets the events for the request Payload for a Conversions API Event.
	 * events is represented by a list/array of ServerEvent objects.
	 * @param events for the current server event
	 */
	setEvents(events: Array<ServerEvent>) : EventRequest {
		this._events = events;
		return this;
	}

	/**
	 * Gets the partner_agent for the request
	 * Allows you to specify the platform from which the event is sent e.g. wordpress
	 */
	get partner_agent() {
		return this._partner_agent;
	}

	/**
	 * Sets the partner_agent for the request
	 * Allows you to specify the platform from which the event is sent e.g. wordpress
	 * @param {String} partner_agent String value for the partner agent
	 */
	set partner_agent(partner_agent: string) {
		this._partner_agent = partner_agent;
	}

	/**
	 * Sets the partner_agent for the request
	 * Allows you to specify the platform from which the event is sent e.g. wordpress
	 * @param {String} partner_agent String value for the partner agent
	 */
	setPartnerAgent(partner_agent: string) : EventRequest {
		this._partner_agent = partner_agent;
		return this;
	}

	/**
	 * Gets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/main-body#test_event_code} for an example.
	 */
	get test_event_code() {
		return this._test_event_code;
	}

	/**
	 * Sets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/main-body#test_event_code} for an example.
	 */
	set test_event_code(test_event_code: string) {
		this._test_event_code = test_event_code;
	}

	/**
	 * Sets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/main-body#test_event_code} for an example.
	 */
	setTestEventCode(test_event_code: string) : EventRequest {
		this._test_event_code = test_event_code;
		return this;
	}


	/**
	 * Gets the debug mode flag for the Graph API request
	 */
	get debug_mode() {
		return this._debug_mode;
	}

	/**
	 * Sets the debug mode flag for the Graph API request
	 * @param debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	set debug_mode(debug_mode: boolean) {
		this._debug_mode = debug_mode;
	}

	/**
	 * Sets the debug mode flag for the Graph API request
	 * @param {Boolean} debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	setDebugMode(debug_mode: boolean) : EventRequest {
		this._debug_mode = debug_mode;
		return this;
	}

	/**
	 * Gets the access token for the Graph API request
	 */
	get access_token() {
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
	setAccessToken(access_token: string) : EventRequest {
		this._access_token = access_token;
		return this;
	}

	/**
	 * Gets the pixel against which we send the events
	 */
	get pixel() {
		return this._pixel_id;
	}

	/**
	 * Sets the pixel against which we send the events
	 * @param {String} pixel_id string value representing the Pixel's Id to which you are sending the events.
	 */
	set pixel_id(pixel_id: string) {
		this._pixel_id = pixel_id;
	}

	/**
	 * Sets the pixel against which we send the events
	 * @param {String} pixel_id String value for the pixel_id against which you want to send the events.
	 */
	setPixelId(pixel_id: string) : EventRequest {
		this._pixel_id = pixel_id;
		return this;
	}

	/* Region Offline Conversion Fields */
	/**
	 * Gets the NamespaceId for the events
	 */
	get namespace_id() {
		return this._namespace_id;
	}

	/**
	 * Sets the namespace_id for the events
	 * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
	 */
	set namespace_id(namespace_id: string) {
		this._namespace_id = namespace_id;
	}

	/**
	 * Sets the namespace_id for the events
	 * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
	 */
	setNamespaceId(namespace_id: string) : EventRequest {
		this._namespace_id = namespace_id;
		return this;
	}

	/**
	 * Gets the Upload Tag for the current events upload
	 */
	get upload_tag() {
		return this._upload_tag;
	}

	/**
	 * Sets the upload_tag for the current events upload
	 * @param {String} upload_tag Tag string added to Track your Offline event uploads
	 */
	set upload_tag(upload_tag: string) {
		this._upload_tag = upload_tag;
	}

	/**
	 * Sets the upload_tag for the current events upload
	 * @param {String} upload_tag Tag string added to Track your Offline event uploads
	 */
	setUploadTag(upload_tag: string) : EventRequest {
		this._upload_tag = upload_tag;
		return this;
	}

	/**
	 * Gets the Upload Tag for the current events upload
	 */
	get upload_id() {
		return this._upload_id;
	}

	/**
	 * Sets the upload_id for the current events upload
	 * @param {String} upload_id Unique id used to denote the current set being uploaded
	 */
	set upload_id(upload_id: string) {
		this._upload_id = upload_id;
	}

	/**
	 * Sets the upload_id for the current events upload
	 * @param {String} upload_id Unique id used to denote the current set being uploaded
	 */
	setUploadId(upload_id: string) : EventRequest {
		this._upload_id = upload_id;
		return this;
	}

	/**
	 * Gets the Upload Tag for the current events upload
	 */
	get upload_source() {
		return this._upload_source;
	}

	/**
	 * Sets the upload_source for the current events upload
	 * @param {String} upload_source origin/source of data for the dataset to be uploaded.
	 */
	set upload_source(upload_source: string) {
		this._upload_source = upload_source;
	}

	/**
	 * Sets the upload_source for the current events upload
	 * @param {String} upload_source origin/source of data for the dataset to be uploaded.
	 */
	setUploadSource(upload_source: string) : EventRequest {
		this._upload_source = upload_source;
		return this;
	}

	/**
	 * Gets the http_service object for making the events request
	 */
	get http_service() {
		return this._http_service;
	}

	/**
	 * Sets the http_service object for making the events request
	 * @param {HttpServiceInterface} http_service
	 */
	set http_service(http_service: HttpServiceInterface) {
		this._http_service = http_service;
	}

	/**
	 * Sets the http_service object for making the events request
	 * @param {HttpServiceInterface} http_service
	 */
	setHttpService(http_service: HttpServiceInterface): EventRequest {
		this._http_service = http_service;
		return this;
	}

	/**
	 * Executes the current event_request data by making a call to the Facebook Graph API.
	 */
	execute(): Promise<EventResponse> {
		let fields, params;
		fields = [];
		params = {};

		let normalized_events = [];

		for (let i = 0; i < this.events.length; i++) {
			const event = this.events[i];
			const normalized_event = event.normalize.call(event);
			normalized_events.push(normalized_event);
		}

		if (this.debug_mode) {
			this._api.setDebug(true);
		}


		params = {
			'data': normalized_events,
			'partner_agent': this.partner_agent,
			'test_event_code' : this.test_event_code,
			'namespace_id' : this.namespace_id,
			'upload_id' : this.upload_id,
			'upload_tag' : this.upload_tag,
			'upload_source' : this.upload_source,
			'access_token': this.access_token,
		};

		let http_service;
		if (this._http_service != null) {
			http_service = this._http_service;
		} else {
			http_service = HttpServiceClientConfig.getClient();
		}
		if (http_service != null) {
			const url = [
                FacebookAdsApi.GRAPH,
                FacebookAdsApi.VERSION,
                this._pixel_id,
                'events'
            ].join('/');
            const headers = {
                'User-Agent': `fbbizsdk-nodejs-v${FacebookAdsApi.SDK_VERSION}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            };

			return http_service.executeRequest(
				url,
				HttpMethod.POST,
				headers,
				params
			);
		}
		const adsPixelPromise = (new AdsPixel(this._pixel_id)).createEvent(
			fields,
			params
		);

		return adsPixelPromise.then(response => {
			return new EventResponse(
					response._data['events_received'],
					response._data['messages'],
					response._data['fbtrace_id'],
					response._data['id'],
					response._data['num_processed_entries']);
		});
	}

	cloneWithoutEvents(): EventRequest {
		return new EventRequest(
			this._access_token,
			this._pixel_id,
			[],
			this._partner_agent,
			this._test_event_code,
			this._namespace_id,
			this._upload_id,
			this._upload_tag,
			this._upload_source,
			this._debug_mode,
		);
	}
}
