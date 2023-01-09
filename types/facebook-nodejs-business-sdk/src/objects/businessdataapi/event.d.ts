import UserData from './user-data';
import CustomData from './custom-data';
export default class Event {
    _event_name: string;
    _event_time: number;
    _event_id: string;
    _user_data: UserData;
    _custom_data: CustomData;
    _data_processing_options: string[];
    _data_processing_options_state: number;
    _data_processing_options_country: number;
    constructor(
        event_name: string,
        event_time: number,
        user_data: UserData,
        custom_data: CustomData,
        event_id: string,
        data_processing_options: string[],
        data_processing_options_country: number,
        data_processing_options_state: number,
    );
    get event_name(): string;
    set event_name(event_name: string);
    get event_time(): number;
    set event_time(event_time: number);
    get event_id(): string;
    set event_id(event_id: string);
    get user_data(): UserData;
    set user_data(user_data: UserData);
    get custom_data(): CustomData;
    set custom_data(custom_data: CustomData);
    get data_processing_options(): string[];
    set data_processing_options(data_processing_options: string[]);
    get data_processing_options_country(): number;
    set data_processing_options_country(data_processing_options_country: number);
    get data_processing_options_state(): number;
    set data_processing_options_state(data_processing_options_state: number);
    toJson(): Record<string, any>;
}
