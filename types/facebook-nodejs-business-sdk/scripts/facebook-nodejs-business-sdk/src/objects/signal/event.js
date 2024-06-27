/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import SignalUserData from './user-data';
import SignalCustomData from './custom-data';
import BusinessDataEvent from '../businessdataapi/event';
import ServerEvent from '../serverside/server-event';

import Utils from './utils';

/**
 * SignalEvent, event data for both Conversion API and Business Data API
 */
export default class Event {

    _business_data_event: BusinessDataEvent;
    _server_event: ServerEvent;

    /**
     * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
     * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
     * @param {String} event_source_url The browser URL where the event happened.
     * @param {String} event_id This ID can be any string chosen by the advertiser.
     * @param {String} action_source A string that indicates where the event took place.
     * @param {Boolean} opt_out A flag that indicates we should not use this event for ads delivery optimization.
     * @param {SignalUserData} user_data SignalUserData contains user data for both Business Data API and Conversion API
     * @param {SignalCustomData} custom_data SignalCustomData contains custom data for both Business Data API and Conversion API
     * @param {Array<string>} data_processing_options Processing options you would like to enable for a specific event.
     * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
     * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
     */
    constructor(event_name: string, event_time: number, event_source_url: string, user_data: SignalUserData, custom_data: SignalCustomData, event_id: string, opt_out: boolean, action_source: string, data_processing_options: Array < string > , data_processing_options_country: number, data_processing_options_state: number) {
        const business_data_user_data = user_data != undefined ?  user_data.business_data_user_data :  user_data;
        const server_user_data = user_data != undefined ? user_data.server_user_data : user_data;
        const business_data_custom_data = custom_data != undefined ? custom_data.business_data_custom_data : custom_data;
        const server_custom_data = custom_data != undefined ? custom_data.server_custom_data : custom_data;
        this._business_data_event = new BusinessDataEvent(
            event_name,
            event_time,
            business_data_user_data,
            business_data_custom_data,
            event_id,
            data_processing_options,
            data_processing_options_country,
            data_processing_options_state
        );

        this._server_event = new ServerEvent(
            event_name,
            event_time,
            event_source_url,
            server_user_data,
            server_custom_data,
            event_id,
            opt_out,
            action_source,
            data_processing_options,
            data_processing_options_country,
            data_processing_options_state
        );
    }

    /**
     * Gets the Event Name for the current Event.
     */
    get event_name() {
        return Utils.constructResponse(this._server_event.event_name, this._business_data_event.event_name);
    }

    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name a Facebook pixel Standard Event or Custom Event name.
     */
    set event_name(event_name: string) {
        this._server_event.event_name = event_name;
        this._business_data_event.event_name = event_name;
    }

    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name Facebook pixel Standard Event or Custom Event name.
     */
    setEventName(event_name: string): Event {
        this._server_event.event_name = event_name;
        this._business_data_event.event_name = event_name;
        return this;
    }

    /**
     * Gets the Event Time when the current Event happened.
     */
    get event_time() {
        return Utils.constructResponse(this._server_event.event_time, this._business_data_event.event_time);
    }

    /**
     * Sets the Event Time when the current Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
     */
    set event_time(event_time: number) {
        this._server_event.event_time = event_time;
        this._business_data_event.event_time = event_time;
    }

    /**
     * Sets the Event Time when the current Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
     */
    setEventTime(event_time: number): Event {
        this._server_event.event_time = event_time;
        this._business_data_event.event_time = event_time;
        return this;
    }

    /**
     * Gets the browser url source for the current event.
     */
    get event_source_url() {
        return Utils.constructResponse(this._server_event.event_source_url, null);
    }

    /**
     * Sets the browser url source for the current event.
     * @param {String} event_source_url The browser URL where the event happened.
     */
    set event_source_url(event_source_url: string) {
        this._server_event.event_source_url = event_source_url;
    }

    /**
     * Sets the browser url source for the current event.
     * @param {String} event_source_url The browser URL where the event happened.
     */
    setEventSourceUrl(event_source_url: string): Event {
        this._server_event.event_source_url = event_source_url;
        return this;
    }

    /**
     * Gets the event_id for the current Event.
     */
    get event_id() {
        return Utils.constructResponse(this._server_event.event_id, this._business_data_event.event_id);
    }

    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical for Conversion API.
     */
    set event_id(event_id: string) {
        this._server_event.event_id = event_id;
        this._business_data_event.event_id = event_id;
    }

    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical for Conversion API.
     */
    setEventId(event_id: string): Event {
        this._server_event.event_id = event_id;
        this._business_data_event.event_id = event_id;
        return this;
    }

    /**
     * Gets the action_source for the current event. The Action Source represents where the action took place.
     */
    get action_source() {
        return Utils.constructResponse(this._server_event.action_source, null);
    }

    /**
     * Sets the action_source for the current event.
     * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
     */
    set action_source(action_source: string) {
        this._server_event.action_source = action_source;
    }

    /**
     * Sets the action_source for the current event.
     * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
     */
    setActionSource(action_source: string): Event {
        this._server_event.action_source = action_source;
        return this;
    }

    /**
     * Gets the opt_out feature for the current event.opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    get opt_out() {
        return Utils.constructResponse(this._server_event.opt_out, null);
    }

    /**
     * Sets the opt_out feature for the current event.
     * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    set opt_out(opt_out: boolean) {
        this._server_event.opt_out = opt_out;
    }

    /**
     * Sets the opt_out feature for the current event.
     * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    setOptOut(opt_out: boolean): Event {
        this._server_event.opt_out = opt_out;
        return this;
    }

    /**
     * Gets the user data objects for Business Data API and Conversion API.
     * @param user_data contains user data, use SignalUserData to construct
     */
    get user_data() {
        return Utils.constructResponse(this._server_event.user_data, this._business_data_event.user_data);
    }

    /**
     * Sets the user data objects for Business Data API and Conversion API.
     * @param user_data contains user data, use SignalUserData to construct
     */
    set user_data(user_data: SignalUserData) {
        this._server_event.user_data = user_data.server_user_data;
        this._business_data_event.user_data = user_data.business_data_user_data;
    }

    /**
     * Sets the user data objects for Business Data API and Conversion API.
     * @param {SignalUserData} user_data contains user data, use SignalUserData to construct
     */
    setUserData(user_data: SignalUserData): Event {
        this._server_event.user_data = user_data.server_user_data;
        this._business_data_event.user_data = user_data.business_data_user_data;
        return this;
    }

    /**
     * Gets the custom data objects for Business Data API and Conversion API.
     */
    get custom_data() {
        return Utils.constructResponse(this._server_event.custom_data, this._business_data_event.custom_data);
    }

    /**
     * Sets the custom data objects for Business Data API and Conversion API.
     * @param custom_data contains custom data, use SignalCustomData to construct
     */
    set custom_data(custom_data: SignalCustomData) {
        this._server_event.custom_data = custom_data.server_custom_data;
        this._business_data_event.custom_data = custom_data.business_data_custom_data;
    }

    /**
     * Sets the custom data objects for Business Data API and Conversion API.
     * @param {SignalCustomData} custom_data contains custom data, use SignalCustomData to construct
     */
    setCustomData(custom_data: SignalCustomData): Event {
        this._server_event.custom_data = custom_data.server_custom_data;
        this._business_data_event.custom_data = custom_data.business_data_custom_data;
        return this;
    }

    /**
     * Gets the data_processing_options for the current event.
     * Processing options you would like to enable for a specific event.
     */
    get data_processing_options() {
        return Utils.constructResponse(this._server_event.data_processing_options, this._business_data_event.data_processing_options);
    }

    /**
     * Sets the data_processing_options for the current event.
     * @param {Array<string>} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     */
    set data_processing_options(data_processing_options: Array < string > ) {
        this._server_event.data_processing_options = data_processing_options;
        this._business_data_event.data_processing_options = data_processing_options
    }

    /**
     * Sets the data_processing_options for the current event.
     * @param {Array<string>} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     */
    setDataProcessingOptions(data_processing_options: Array < string > ): Event {
        this._server_event.data_processing_options = data_processing_options;
        this._business_data_event.data_processing_options = data_processing_options
        return this;
    }

    /**
     * Gets the data_processing_options_country for the current event.
     * A country that you want to associate to this data processing option.
     */
    get data_processing_options_country() {
        return Utils.constructResponse(this._server_event.data_processing_options_country, this._business_data_event.data_processing_options_country);
    }

    /**
     * Sets the data_processing_options_country for the current event.
     * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
     */
    set data_processing_options_country(data_processing_options_country: number) {
        this._server_event.data_processing_options_country = data_processing_options_country;
        this._business_data_event.data_processing_options_country = data_processing_options_country;
    }

    /**
     * Sets the data_processing_options_country for the current event.
     * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
     */
    setDataProcessingOptionsCountry(data_processing_options_country: number): Event {
        this._server_event.data_processing_options_country = data_processing_options_country;
        this._business_data_event.data_processing_options_country = data_processing_options_country;
        return this;
    }

    /**
     * Gets the data_processing_options_state for the current event.
     * A state that you want to associate with this data processing option.
     */
    get data_processing_options_state() {
        return Utils.constructResponse(this._server_event.data_processing_options_state, this._business_data_event.data_processing_options_state);
    }

    /**
     * Sets the data_processing_options_state for the current event.
     * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
     */
    set data_processing_options_state(data_processing_options_state: number) {
        this._server_event.data_processing_options_state = data_processing_options_state;
        this._business_data_event.data_processing_options_state = data_processing_options_state;
    }

    /**
     * Sets the data_processing_options_state for the current event.
     * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
     */
    setDataProcessingOptionsState(data_processing_options_state: number): Event {
        this._server_event.data_processing_options_state = data_processing_options_state;
        this._business_data_event.data_processing_options_state = data_processing_options_state;
        return this;
    }

    /**
     * Gets the constructed custom data for Business Data API
     */
    get business_data_event() {
        return this._business_data_event;
    }

    /**
     * Gets the constructed custom data for Business Data API
     */
    get server_event() {
        return this._server_event;
    }

    /**
     * Convert to Json object for api call
     */
    toJson(): Object {
        const business_data_event = this._business_data_event.toJson();
        const server_event = this._server_event.normalize();

        return Utils.constructResponse(server_event, business_data_event);
    }

}
