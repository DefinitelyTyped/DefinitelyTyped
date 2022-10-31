export default class EventResponse {
    _events_received: number;
    _messages: Array<string>;
    _fbtrace_id: string;
    _id: string;
    _num_processed_entries: number;
    constructor(events_received: number, messages: Array<string>, fbtrace_id: string, id: string, num_processed_entries: number);
    get events_received(): number;
    set events_received(events_received: number);
    setEventsReceived(events_received: number): EventResponse;
    get messages(): Array<string>;
    set messages(messages: Array<string>);
    setMessages(messages: Array<string>): EventResponse;
    get fbtrace_id(): string;
    set fbtrace_id(fbtrace_id: string);
    setFbtraceId(fbtrace_id: string): EventResponse;
    get id(): string;
    set id(id: string);
    get num_processed_entries(): number;
    set num_processed_entries(num_processed_entries: number);
}
