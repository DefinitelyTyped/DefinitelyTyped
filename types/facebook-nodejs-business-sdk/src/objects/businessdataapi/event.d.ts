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
    _data_processing_options: string[];
    _data_processing_options_state: number;
    _data_processing_options_country: number;
    /**
     * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
     * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
     * @param {String} event_id This ID can be any string chosen by the advertiser.
     * @param {UserData} user_data A map that contains user data. See UserData Class for options.
     * @param {CustomData} custom_data A map that contains user data. See CustomData Class for options.
     * @param {string[]} data_processing_options Processing options you would like to enable for a specific event.
     * @param {Number} data_processing_options_country A country that you want to associate to this data processing option.
     * @param {Number} data_processing_options_state A state that you want to associate with this data processing option.
     */
    constructor(event_name: string, event_time: number, user_data: UserData, custom_data: CustomData, event_id: string, data_processing_options: string[], data_processing_options_country: number, data_processing_options_state: number);
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
     * Gets the Event Time when the current Event happened.
     */
    get event_time(): number;
    /**
     * Sets the Event Time when the current Event happened.
     * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
     */
    set event_time(event_time: number);
    /**
     * Gets the event_id for the current Event.
     */
    get event_id(): string;
    /**
     * Sets the event Id for the current Event.
     * @param {String} event_id Unique id for the event.
     */
    set event_id(event_id: string);
    /**
     * Gets the user data object for the current Event.
     */
    get user_data(): UserData;
    /**
     * Sets the user data object for the current Event.
     * @param {UserData} user_data user_data is an object that contains user data.
     */
    set user_data(user_data: UserData);
    /**
     * Gets the custom data object for the current Event.
     */
    get custom_data(): CustomData;
    /**
     * Sets the custom data object for the current Event.
     * @param {CustomData} custom_data is an object that includes additional business data about the event.
     */
    set custom_data(custom_data: CustomData);
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
     * Convert to Json object for api call
     */
    toJson(): Record<any, any>;
}
