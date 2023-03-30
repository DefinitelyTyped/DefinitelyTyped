import UserData from './user-data';
import CustomData from './custom-data';
export default class ServerEvent {
    _event_name: string;
    _event_time: number;
    _event_source_url: string;
    _event_id: string;
    _action_source: string;
    _opt_out: boolean;
    _user_data: UserData;
    _custom_data: CustomData;
    _data_processing_options: string[];
    _data_processing_options_state: number;
    _data_processing_options_country: number;
    constructor(
        event_name?: string,
        event_time?: number,
        event_source_url?: string,
        user_data?: UserData,
        custom_data?: CustomData,
        event_id?: string,
        opt_out?: boolean,
        action_source?: string,
        data_processing_options?: string[],
        data_processing_options_country?: number,
        data_processing_options_state?: number,
    );
    get event_name(): string;
    set event_name(event_name: string);
    setEventName(event_name: string): ServerEvent;
    get event_time(): number;
    set event_time(event_time: number);
    setEventTime(event_time: number): ServerEvent;
    get event_source_url(): string;
    set event_source_url(event_source_url: string);
    setEventSourceUrl(event_source_url: string): ServerEvent;
    get event_id(): string;
    set event_id(event_id: string);
    setEventId(event_id: string): ServerEvent;
    get action_source(): string;
    set action_source(action_source: string);
    setActionSource(action_source: string): ServerEvent;
    get opt_out(): boolean;
    set opt_out(opt_out: boolean);
    setOptOut(opt_out: boolean): ServerEvent;
    get user_data(): UserData;
    set user_data(user_data: UserData);
    setUserData(user_data: UserData): ServerEvent;
    get custom_data(): CustomData;
    set custom_data(custom_data: CustomData);
    setCustomData(custom_data: CustomData): ServerEvent;
    get data_processing_options(): string[];
    set data_processing_options(data_processing_options: string[]);
    setDataProcessingOptions(data_processing_options: string[]): ServerEvent;
    get data_processing_options_country(): number;
    set data_processing_options_country(data_processing_options_country: number);
    setDataProcessingOptionsCountry(data_processing_options_country: number): ServerEvent;
    get data_processing_options_state(): number;
    set data_processing_options_state(data_processing_options_state: number);
    setDataProcessingOptionsState(data_processing_options_state: number): ServerEvent;
    normalize(): Record<string, any>;
}
