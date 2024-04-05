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
    _opt_out: boolean;
    _user_data: UserData;
    _custom_data: CustomData;
    _app_data: AppData;
    _data_processing_options: string[];
    _data_processing_options_state: number;
    _data_processing_options_country: number;
    _advanced_measurement_table: string;
    _advertiser_tracking_enabled: boolean;
    /**
     * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
     * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
     * @param {String} event_source_url The browser URL where the event happened.
     * @param {String} event_id This ID can be any string chosen by the advertiser.
     * @param {String} action_source A string that indicates where the event took place.
     * @param {Boolean} opt_out A flag that indicates we should not use this event for ads delivery optimization.
     * @param {UserData} user_data A map that contains user data. See UserData Class for options.
     * @param {CustomData} custom_data A map that contains user data. See CustomData Class for options.
     * @param {string[]} data_processing_options Processing options you would like to enable for a specific event.
     * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
     * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
     * @param {String} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
     * @param {Boolean} advertiser_tracking_enabled A boolean that indicates whether the user has opted into/out of advertiser tracker on apps.
     */
    constructor(event_name?: string, event_time?: number, event_source_url?: string, user_data?: UserData, custom_data?: CustomData, app_data?: AppData, event_id?: string, opt_out?: boolean, action_source?: string, data_processing_options?: string[], data_processing_options_country?: number, data_processing_options_state?: number, advanced_measurement_table?: string, advertiser_tracking_enabled?: boolean);
    /**
     * Gets the Event Name for the current Event.
     */
    get event_name(): string;
    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name a Facebook pixel Standard Event or Custom Event name.
     */
    set event_name(event_name: string);
    /**
     * Sets the Event Name for the current Event.
     * @param {String} event_name Facebook pixel Standard Event or Custom Event name.
     */
    setEventName(event_name: string): ServerEvent;
    /**
     * Gets the Event Time when the current Event happened.
     */
    get event_time(): number;
    /**
     * Sets the Event Time when the current Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
     */
    set event_time(event_time: number);
    /**
     * Sets the Event Time when the current Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
     */
    setEventTime(event_time: number): ServerEvent;
    /**
     * Gets the browser url source for the current event.
     */
    get event_source_url(): string;
    /**
     * Sets the browser url source for the current event.
     * @param {String} event_source_url The browser URL where the event happened.
     */
    set event_source_url(event_source_url: string);
    /**
     * Sets the browser url source for the current event.
     * @param {String} event_source_url The browser URL where the event happened.
     */
    setEventSourceUrl(event_source_url: string): ServerEvent;
    /**
     * Gets the event_id for the current Event.
     */
    get event_id(): string;
    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical.
     * Learn about Deduplicate Pixel and Conversions API Events: {@link https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events}
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#event-id}
     */
    set event_id(event_id: string);
    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical.
     * Learn about Deduplicate Pixel and Conversions API Events: {@link https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events}
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#event-id}
     */
    setEventId(event_id: string): ServerEvent;
    /**
     * Gets the action_source for the current event. The Action Source represents where the action took place.
     */
    get action_source(): string;
    /**
     * Sets the action_source for the current event.
     * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
     */
    set action_source(action_source: string);
    /**
     * Sets the action_source for the current event.
     * @param {String} action_source represents where the action took place. One of {'physical_store','app','chat','email','other','phone_call','system_generated','website'}
     */
    setActionSource(action_source: string): ServerEvent;
    /**
     * Gets the opt_out feature for the current event.opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    get opt_out(): boolean;
    /**
     * Sets the opt_out feature for the current event.
     * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    set opt_out(opt_out: boolean);
    /**
     * Sets the opt_out feature for the current event.
     * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
     */
    setOptOut(opt_out: boolean): ServerEvent;
    /**
     * Gets the user data object for the current Server Event.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
     */
    get user_data(): UserData;
    /**
     * Sets the user data object for the current Server Event.
     * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
     */
    set user_data(user_data: UserData);
    /**
     * Sets the user data object for the current Server Event.
     * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#user-data}
     */
    setUserData(user_data: UserData): ServerEvent;
    /**
     * Gets the custom data object for the current Server Event.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
     */
    get custom_data(): CustomData;
    /**
     * Sets the custom data object for the current Server Event.
     * @param {CustomData} custom_data is a map that includes additional business data about the event.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
     */
    set custom_data(custom_data: CustomData);
    /**
     * Sets the custom data object for the current Server Event.
     * @param {CustomData} custom_data is a map that includes additional business data about the event.
     * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#custom-data}
     */
    setCustomData(custom_data: CustomData): ServerEvent;
    /**
     *
     */
    get app_data(): AppData;
    /**
     *
     */
    set app_data(app_data: AppData);
    /**
     *
     */
    setAppData(app_data: AppData): ServerEvent;
    /**
     * Gets the data_processing_options for the current event.
     * Processing options you would like to enable for a specific event.
     */
    get data_processing_options(): string[];
    /**
     * Sets the data_processing_options for the current event.
     * @param {string[]} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    set data_processing_options(data_processing_options: string[]);
    /**
     * Sets the data_processing_options for the current event.
     * @param {string[]} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    setDataProcessingOptions(data_processing_options: string[]): ServerEvent;
    /**
     * Gets the data_processing_options_country for the current event.
     * A country that you want to associate to this data processing option.
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    get data_processing_options_country(): number;
    /**
     * Sets the data_processing_options_country for the current event.
     * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
     */
    set data_processing_options_country(data_processing_options_country: number);
    /**
     * Sets the data_processing_options_country for the current event.
     * @param {number} data_processing_options_country represents country that you want to associate to this data processing option.
     */
    setDataProcessingOptionsCountry(data_processing_options_country: number): ServerEvent;
    /**
     * Gets the data_processing_options_state for the current event.
     * A state that you want to associate with this data processing option.
     * @see {@link https://developers.facebook.com/docs/marketing-apis/data-processing-options}
     */
    get data_processing_options_state(): number;
    /**
     * Sets the data_processing_options_state for the current event.
     * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
     */
    set data_processing_options_state(data_processing_options_state: number);
    /**
     * Sets the data_processing_options_state for the current event.
     * @param {number} data_processing_options_state represents state that you want to associate with this data processing option.
     */
    setDataProcessingOptionsState(data_processing_options_state: number): ServerEvent;
    /**
     * Gets the advanced_measurement_table for the current event.
     * Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
     */
    get advanced_measurement_table(): string;
    /**
     * Sets the advanced_measurement_table for the current event.
     * @param {string} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
     */
    set advanced_measurement_table(advanced_measurement_table: string);
    /**
     * Sets the advanced_measurement_table for the current event.
     * @param {string} advanced_measurement_table Name of Advanced Measurement table. Only used for the Advanced Measurement API in the Advanced Analytics product.
     */
    setAdvancedMeasurementTable(advanced_measurement_table: string): ServerEvent;
    /**
     * Gets the advertiser_tracking_enabled for the current event.
     * @see {@link https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled} (documentation only covers iOS SDK)
     */
    get advertiser_tracking_enabled(): boolean;
    /**
     * Sets the advertiser_tracking_enabled for the current event.
     * @param {boolean} advertiser_tracking_enabled represents whether the user has opted into/out of advertiser tracking on apps.
     */
    set advertiser_tracking_enabled(advertiser_tracking_enabled: boolean);
    /**
     * Sets the advertiser_tracking_enabled for the current event.
     * @param {number} data_processing_options_country represents whether the user has opted into/out of advertiser tracking on apps.
     */
    setAdvertiserTrackingEnabled(advertiser_tracking_enabled: boolean): ServerEvent;
    /**
     * Returns the normalized payload for the event.
     * @returns {Object} normalized event payload.
     */
    normalize(): Record<any, any>;
}
