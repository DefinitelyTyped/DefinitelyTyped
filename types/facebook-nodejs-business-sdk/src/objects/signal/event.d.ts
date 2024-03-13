import SignalUserData from './user-data';
import SignalCustomData from './custom-data';
import BusinessDataEvent from '../businessdataapi/event';
import ServerEvent from '../serverside/server-event';
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
     * @param {string[]} data_processing_options Processing options you would like to enable for a specific event.
     * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
     * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
     */
    constructor(event_name: string, event_time: number, event_source_url: string, user_data: SignalUserData, custom_data: SignalCustomData, event_id: string, opt_out: boolean, action_source: string, data_processing_options: string[], data_processing_options_country: number, data_processing_options_state: number);
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
    setEventName(event_name: string): Event;
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
    setEventTime(event_time: number): Event;
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
    setEventSourceUrl(event_source_url: string): Event;
    /**
     * Gets the event_id for the current Event.
     */
    get event_id(): string;
    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical for Conversion API.
     */
    set event_id(event_id: string);
    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical for Conversion API.
     */
    setEventId(event_id: string): Event;
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
    setActionSource(action_source: string): Event;
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
    setOptOut(opt_out: boolean): Event;
    /**
     * Gets the user data objects for Business Data API and Conversion API.
     * @param user_data contains user data, use SignalUserData to construct
     */
    get user_data(): SignalUserData;
    /**
     * Sets the user data objects for Business Data API and Conversion API.
     * @param user_data contains user data, use SignalUserData to construct
     */
    set user_data(user_data: SignalUserData);
    /**
     * Sets the user data objects for Business Data API and Conversion API.
     * @param {SignalUserData} user_data contains user data, use SignalUserData to construct
     */
    setUserData(user_data: SignalUserData): Event;
    /**
     * Gets the custom data objects for Business Data API and Conversion API.
     */
    get custom_data(): SignalCustomData;
    /**
     * Sets the custom data objects for Business Data API and Conversion API.
     * @param custom_data contains custom data, use SignalCustomData to construct
     */
    set custom_data(custom_data: SignalCustomData);
    /**
     * Sets the custom data objects for Business Data API and Conversion API.
     * @param {SignalCustomData} custom_data contains custom data, use SignalCustomData to construct
     */
    setCustomData(custom_data: SignalCustomData): Event;
    /**
     * Gets the data_processing_options for the current event.
     * Processing options you would like to enable for a specific event.
     */
    get data_processing_options(): string[];
    /**
     * Sets the data_processing_options for the current event.
     * @param {string[]} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     */
    set data_processing_options(data_processing_options: string[]);
    /**
     * Sets the data_processing_options for the current event.
     * @param {string[]} data_processing_options represents Data processing options you would like to enable for a specific event, e.g. [] or ['LDU']
     */
    setDataProcessingOptions(data_processing_options: string[]): Event;
    /**
     * Gets the data_processing_options_country for the current event.
     * A country that you want to associate to this data processing option.
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
    setDataProcessingOptionsCountry(data_processing_options_country: number): Event;
    /**
     * Gets the data_processing_options_state for the current event.
     * A state that you want to associate with this data processing option.
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
    setDataProcessingOptionsState(data_processing_options_state: number): Event;
    /**
     * Gets the constructed custom data for Business Data API
     */
    get business_data_event(): BusinessDataEvent;
    /**
     * Gets the constructed custom data for Business Data API
     */
    get server_event(): ServerEvent;
    /**
     * Convert to Json object for api call
     */
    toJson(): Record<any, any>;
}
