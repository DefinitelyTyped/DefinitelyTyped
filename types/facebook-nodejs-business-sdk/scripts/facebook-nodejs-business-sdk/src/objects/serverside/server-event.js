/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import UserData from './user-data';
import CustomData from './custom-data';
import AppData from './app-data';

/**
 * ServerEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event}
 */
export default class ServerEvent {

	_event_name: string;
	_event_time: number;
	_event_source_url: string;
	_event_id: string;
	_action_source: string;
	_opt_out: bool;
	_user_data: UserData;
	_custom_data: CustomData;
	_app_data: AppData;
	_data_processing_options: Array<string>;
	_data_processing_options_state: number;
	_data_processing_options_country: number;
	_advanced_measurement_table: string;
	_advertiser_tracking_enabled: bool;
	_messaging_channel: string;

	/**
	 * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
	 * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
	 * @param {String} event_source_url The browser URL where the event happened.
	 * @param {String} event_id This ID can be any string chosen by the advertiser.
	 * @param {String} action_source A string that indicates where the event took place.
	 * @param {Boolean} opt_out A flag that indicates we should not use this event for ads delivery optimization.
	 * @param {UserData} user_data A map that contains user data. See UserData Class for options.
	 * @param {CustomData} custom_data A map that contains user data. See CustomData Class for options.
	 * @param {Array<string>} data_processing_options Processing options you would like to enable for a specific event.
	 * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
	 * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
	 * @param {String} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
	 * @param {Boolean} advertiser_tracking_enabled A boolean that indicates whether the user has opted into/out of advertiser tracker on apps.
	 * @param {String} messaging_channel Indicates which channel was used to send the message.
	 */
	constructor(event_name: string, event_time: number, event_source_url: string, user_data: UserData, custom_data: CustomData, app_data: AppData, event_id: string, opt_out: boolean, action_source: string, data_processing_options: Array<string>, data_processing_options_country: number, data_processing_options_state: number, advanced_measurement_table: string, advertiser_tracking_enabled: boolean, messaging_channel: string) {

		this._event_name = event_name;
		this._event_time = event_time;
		this._user_data = user_data;
		this._custom_data = custom_data;
		this._app_data = app_data;
		this._event_source_url = event_source_url;
		this._event_id = event_id;
		this._opt_out = opt_out;
		this._action_source = action_source;
		this._data_processing_options = data_processing_options;
		this._data_processing_options_country = data_processing_options_country;
		this._data_processing_options_state = data_processing_options_state;
		this._advanced_measurement_table = advanced_measurement_table;
		this._messaging_channel = messaging_channel;
	}

	/**
	 * Gets the Event Name for the current Event.
	 */
	get event_name() {
		return this._event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
	 * @param {String} event_name a Facebook pixel Standard Event or Custom Event name.
	 */
	set event_name(event_name: string) {
		this._event_name = event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
	 * @param {String} event_name Facebook pixel Standard Event or Custom Event name.
	 */
	setEventName(event_name: string) : ServerEvent {
		this._event_name = event_name;
		return this;
	}

	/**
	 * Gets the Event Time when the current Event happened.
	 */
	get event_time() {
		return this._event_time;
	}

	/**
	 * Sets the Event Time when the current Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
	 */
	set event_time(event_time: number) {
		this._event_time = event_time;
	}

	/**
	 * Sets the Event Time when the current Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
	 */
	setEventTime(event_time: number) : ServerEvent {
		this._event_time = event_time;
		return this;
	}

	/**
	 * Gets the browser url source for the current event.
	 */
	get event_source_url() {
		return this._event_source_url;
	}

	/**
	 * Sets the browser url source for the current event.
	 * @param {String} event_source_url The browser URL where the event happened.
	 */
	set event_source_url(event_source_url: string) {
		this._event_source_url = event_source_url;
	}

	/**
	 * Sets the browser url source for the current event.
	 * @param {String} event_source_url The browser URL where the event happened.
	 */
	setEventSourceUrl(event_source_url: string) : ServerEvent {
		this._event_source_url = event_source_url;
		return this;
	}

	/**
	 * Gets the event_id for the current Event.
	 */
	get event_id() {
		return this._event_id;
	}

	/**
	 * Sets the event Id for the current Event.
	 * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical.
	 * Learn about Deduplicate Pixel and Conversions API Events: {@link https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events}
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#event-id}
	 */
	set event_id(event_id: string) {
		this._event_id = event_id;
	}

	/**
	 * Sets the event Id for the current Event.
	 * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical.
	 * Learn about Deduplicate Pixel and Conversions API Events: {@link https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events}
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#event-id}
	 */
	setEventId(event_id: string)  : ServerEvent{
		this._event_id = event_id;
		return this;
	}

	/**
	 * Gets the action_source for the current event. The Action Source represents where the action took place.
	 */
	get action_source() {
		return this._action_source;
	}

	/**
	 * Sets the action_source for the current event.
	 * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
	 */
	set action_source(action_source: string) {
		this._action_source = action_source;
	}

	/**
	 * Sets the action_source for the current event.
	 * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
	 */
	setActionSource(action_source: string) : ServerEvent {
		this._action_source = action_source;
		return this;
	}

	/**
	 * Gets the opt_out feature for the current event.opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	get opt_out() {
		return this._opt_out;
	}

	/**
	 * Sets the opt_out feature for the current event.
	 * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	set opt_out(opt_out: boolean) {
		this._opt_out = opt_out;
	}

	/**
	 * Sets the opt_out feature for the current event.
	 * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	setOptOut(opt_out: boolean) : ServerEvent {
		this._opt_out = opt_out;
		return this;
	}

	/**
	 * Gets the user data object for the current Server Event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
	 */
	get user_data() {
		return this._user_data;
	}

	/**
	 * Sets the user data object for the current Server Event.
	 * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
	 */
	set user_data(user_data: UserData) {
		this._user_data = user_data;
	}

	/**
	 * Sets the user data object for the current Server Event.
	 * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
	 */
	setUserData(user_data: UserData) : ServerEvent {
		this._user_data = user_data;
		return this;
	}

	/**
	 * Gets the custom data object for the current Server Event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
	 */
	get custom_data() {
		return this._custom_data;
	}

	/**
	 * Sets the custom data object for the current Server Event.
	 * @param {CustomData} custom_data is a map that includes additional business data about the event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
	 */
	set custom_data(custom_data: CustomData) {
		this._custom_data = custom_data;
	}

	/**
	 * Sets the custom data object for the current Server Event.
	 * @param {CustomData} custom_data is a map that includes additional business data about the event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
	 */
	setCustomData(custom_data: CustomData) : ServerEvent {
		this._custom_data = custom_data;
		return this;
	}

	/**
	 *
	 */
	get app_data() {
		return this._app_data;
	}

	/**
	 *
	 */
	set app_data(app_data: AppData) {
		this._app_data = app_data;
	}

	/**
	 *
	 */
	 setAppData(app_data: AppData) : ServerEvent {
		this._app_data = app_data;
		return this;
	}

	/**
	 * Gets the data_processing_options for the current event.
	 * Processing options you would like to enable for a specific event.
	 */
	get data_processing_options() {
		return this._data_processing_options;
	}

	/**
	 * Sets the data_processing_options for the current event.
	 * @param {Array<string>} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
	 * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
	 */
	set data_processing_options(data_processing_options: Array<string>) {
		this._data_processing_options = data_processing_options;
	}

	/**
	 * Sets the data_processing_options for the current event.
	 * @param {Array<string>} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
	 * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
	 */
	setDataProcessingOptions(data_processing_options: Array<string>) : ServerEvent {
		this._data_processing_options = data_processing_options;
		return this;
	}

	/**
	 * Gets the data_processing_options_country for the current event.
	 * A country that you want to associate to this data processing option.
	 * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
	 */
	get data_processing_options_country() {
		return this._data_processing_options_country;
	}

	/**
	 * Sets the data_processing_options_country for the current event.
	 * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
	 */
	set data_processing_options_country(data_processing_options_country: number) {
		this._data_processing_options_country = data_processing_options_country;
	}

	/**
	 * Sets the data_processing_options_country for the current event.
	 * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
	 */
	setDataProcessingOptionsCountry(data_processing_options_country: number) : ServerEvent {
		this._data_processing_options_country = data_processing_options_country;
		return this;
	}

	/**
	 * Gets the data_processing_options_state for the current event.
	 * A state that you want to associate with this data processing option.
	 * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
	 */
	get data_processing_options_state() {
		return this._data_processing_options_state;
	}

	/**
	 * Sets the data_processing_options_state for the current event.
	 * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
	 */
	set data_processing_options_state(data_processing_options_state: number) {
		this._data_processing_options_state = data_processing_options_state;
	}

	/**
	 * Sets the data_processing_options_state for the current event.
	 * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
	 */
	setDataProcessingOptionsState(data_processing_options_state: number) : ServerEvent {
		this._data_processing_options_state = data_processing_options_state;
		return this;
	}

	/**
	 * Gets the advanced_measurement_table for the current event.
	 * Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
	 */
	 get advanced_measurement_table() {
		return this._advanced_measurement_table;
	}

	/**
	 * Sets the advanced_measurement_table for the current event.
	 * @param {string} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
	 */
	set advanced_measurement_table(advanced_measurement_table: string) {
		this._advanced_measurement_table = advanced_measurement_table;
	}

	/**
	 * Sets the advanced_measurement_table for the current event.
	 * @param {string} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
	 */
	setAdvancedMeasurementTable(advanced_measurement_table: string) : ServerEvent {
		this._advanced_measurement_table = advanced_measurement_table;
		return this;
	}

	/**
	 * Gets the advertiser_tracking_enabled for the current event.
	 * @see {@link https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled} (documentation only covers iOS SDK)
	 */
	get advertiser_tracking_enabled() {
		return this._advertiser_tracking_enabled;
	}

	/**
	 * Sets the advertiser_tracking_enabled for the current event.
	 * @param {boolean} advertiser_tracking_enabled represents whether the user has opted into/out of advertiser tracking on apps.
	 */
	set advertiser_tracking_enabled(advertiser_tracking_enabled: boolean) {
		this._advertiser_tracking_enabled = advertiser_tracking_enabled;
	}

	/**
	 * Sets the advertiser_tracking_enabled for the current event.
	 * @param {number} data_processing_options_country represents whether the user has opted into/out of advertiser tracking on apps.
	 */
	setAdvertiserTrackingEnabled(advertiser_tracking_enabled: boolean) : ServerEvent {
		this._advertiser_tracking_enabled = advertiser_tracking_enabled;
		return this;
	}

	/**
	 * Gets the messaging_channel for the current event.
	 */
	get messaging_channel() {
		return this._messaging_channel;
	}

	/**
	 * Sets the messaging_channel for the current event.
	 * @param {boolean} messaging_channel represents where the conversation occurred.
	 */
	set messaging_channel(messaging_channel: string) {
		this._messaging_channel = messaging_channel;
	}

	/**
	 * Sets the messaging_channel for the current event.
	 * @param {number} messaging_channel represents where the conversation occurred.
	 */
	setMessagingChannel(messaging_channel: string) : ServerEvent {
		this._messaging_channel = messaging_channel;
		return this;
	}


	/**
	 * Returns the normalized payload for the event.
	 * @returns {Object} normalized event payload.
	 */
	normalize(): Object {

		const serverEvent = {};

		if (this.event_name) {
			serverEvent.event_name = this.event_name;
		}

		if (this.event_time) {
			serverEvent.event_time = this.event_time;
		}

		if (this.user_data) {
			serverEvent.user_data = this.user_data.normalize();
		}

		if (this.custom_data) {
			serverEvent.custom_data = this.custom_data.normalize();
		}

		if (this.app_data) {
			serverEvent.app_data = this.app_data.normalize();
		}

		if (this.action_source) {
			serverEvent.action_source = this.action_source.toLowerCase();
		}

		if (this.opt_out) {
			serverEvent.opt_out = this.opt_out;
		}

		if (this.event_id) {
			serverEvent.event_id = this.event_id;
		}

		if (this.event_source_url) {
			serverEvent.event_source_url = this.event_source_url;
		}

		if (this.data_processing_options) {
			serverEvent.data_processing_options = this.data_processing_options;
		}

		if (this.data_processing_options_country || this.data_processing_options_country === 0) {
			serverEvent.data_processing_options_country = this.data_processing_options_country;
	  	}

	  	if (this.data_processing_options_state || this.data_processing_options_state === 0) {
			serverEvent.data_processing_options_state = this.data_processing_options_state;
	  	}

		if (this.advanced_measurement_table) {
			serverEvent.advanced_measurement_table = this.advanced_measurement_table;
		}

		// boolean variable is set to either true or false
		if (this.advertiser_tracking_enabled === true || this.advertiser_tracking_enabled === false) {
			serverEvent.advertiser_tracking_enabled = this.advertiser_tracking_enabled;
		}

		if (this.messaging_channel) {
			serverEvent.messaging_channel = this.messaging_channel;
		}

		return serverEvent;
	}
}
