import SignalUserData from './user-data';
import SignalCustomData from './custom-data';
import BusinessDataEvent from '../businessdataapi/event';
import ServerEvent from '../serverside/server-event';
export default class Event {
    _business_data_event: BusinessDataEvent;
    _server_event: ServerEvent;
    constructor(
        event_name: string,
        event_time: number,
        event_source_url: string,
        user_data: SignalUserData,
        custom_data: SignalCustomData,
        event_id: string,
        opt_out: boolean,
        action_source: string,
        data_processing_options: string[],
        data_processing_options_country: number,
        data_processing_options_state: number,
    );
    get event_name(): string;
    set event_name(event_name: string);
    setEventName(event_name: string): Event;
    get event_time(): number;
    set event_time(event_time: number);
    setEventTime(event_time: number): Event;
    get event_source_url(): string;
    set event_source_url(event_source_url: string);
    setEventSourceUrl(event_source_url: string): Event;
    get event_id(): string;
    set event_id(event_id: string);
    setEventId(event_id: string): Event;
    get action_source(): string;
    set action_source(action_source: string);
    setActionSource(action_source: string): Event;
    get opt_out(): boolean;
    set opt_out(opt_out: boolean);
    setOptOut(opt_out: boolean): Event;
    get user_data(): SignalUserData;
    set user_data(user_data: SignalUserData);
    setUserData(user_data: SignalUserData): Event;
    get custom_data(): SignalCustomData;
    set custom_data(custom_data: SignalCustomData);
    setCustomData(custom_data: SignalCustomData): Event;
    get data_processing_options(): string[];
    set data_processing_options(data_processing_options: string[]);
    setDataProcessingOptions(data_processing_options: string[]): Event;
    get data_processing_options_country(): number;
    set data_processing_options_country(data_processing_options_country: number);
    setDataProcessingOptionsCountry(data_processing_options_country: number): Event;
    get data_processing_options_state(): number;
    set data_processing_options_state(data_processing_options_state: number);
    setDataProcessingOptionsState(data_processing_options_state: number): Event;
    get business_data_event(): BusinessDataEvent;
    get server_event(): ServerEvent;
    toJson(): Record<string, any>;
}
