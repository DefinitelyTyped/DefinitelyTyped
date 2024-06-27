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

/**
 * Event for Business Data API
 */
export default class Event {

    _event_name: string;
    _event_time: number;
    _event_id: string;
    _user_data: UserData;
    _custom_data: CustomData;
    _data_processing_options: Array < string > ;
    _data_processing_options_state: number;
    _data_processing_options_country: number;

    /**
     * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
     * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
     * @param {String} event_id This ID can be any string chosen by the advertiser.
     * @param {UserData} user_data A map that contains user data. See UserData Class for options.
     * @param {CustomData} custom_data A map that contains user data. See CustomData Class for options.
     * @param {Array<string>} data_processing_options Processing options you would like to enable for a specific event.
     * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
     * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
     */
    constructor(event_name: string, event_time: number, user_data: UserData, custom_data: CustomData, event_id: string, data_processing_options: Array < string > , data_processing_options_country: number, data_processing_options_state: number) {

        this._event_name = event_name;
        this._event_time = event_time;
        this._user_data = user_data;
        this._custom_data = custom_data;
        this.event_id = event_id;
        this._data_processing_options = data_processing_options;
        this._data_processing_options_country = data_processing_options_country;
        this._data_processing_options_state = data_processing_options_state;
    }

    /**
     * Gets the Event Name for the current Event.
     */
    get event_name(): string {
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
     * Gets the Event Time when the current Event happened.
     */
    get event_time(): number {
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
     * Gets the event_id for the current Event.
     */
    get event_id(): string {
        return this._event_id;
    }

    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id Unique id for the event.
     */
    set event_id(event_id: string) {
        this._event_id = event_id;
    }

    /**
     * Gets the user data object for the current Event.
     */
    get user_data(): UserData {
        return this._user_data;
    }

    /**
     * Sets the user data object for the current Event.
     * @param {UserData} user_data user_data is an object that contains user data.
     */
    set user_data(user_data: UserData) {
        this._user_data = user_data;
    }

    /**
     * Gets the custom data object for the current Event.
     */
    get custom_data(): CustomData {
        return this._custom_data;
    }

    /**
     * Sets the custom data object for the current Event.
     * @param {CustomData} custom_data is an object that includes additional business data about the event.
     */
    set custom_data(custom_data: CustomData) {
        this._custom_data = custom_data;
    }

    /**
     * Gets the data_processing_options for the current event.
     * Processing options you would like to enable for a specific event.
     */
    get data_processing_options(): Array < string > {
        return this._data_processing_options;
    }

    /**
     * Sets the data_processing_options for the current event.
     * @param {Array<string>} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    set data_processing_options(data_processing_options: Array < string > ) {
        this._data_processing_options = data_processing_options;
    }

    /**
     * Gets the data_processing_options_country for the current event.
     * A country that you want to associate to this data processing option.
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    get data_processing_options_country(): number {
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
     * Gets the data_processing_options_state for the current event.
     * A state that you want to associate with this data processing option.
     */
    get data_processing_options_state(): number {
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
     * Convert to Json object for api call
     */
    toJson(): Object {
        return {
            'event_name': this._event_name,
            'event_time': this._event_time,
            'event_id': this._event_id,
            'user_data': this._user_data.toJson(),
            'custom_data': this._custom_data.toJson(),
            'data_processing_options': this._data_processing_options,
            'data_processing_options_country': this._data_processing_options_country,
            'data_processing_options_state': this._data_processing_options_state,
        };
    }
}