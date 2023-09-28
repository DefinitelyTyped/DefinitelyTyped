export default class EventResponse {
    _events_received: number;
    _events_dropped: number;
    _message: Array<Record<string, any>>;
    constructor(events_received: number, events_dropped: number, message?: Array<Record<string, any>>);
    get events_received(): number;
    set events_received(events_received: number);
    setEventsReceived(events_received: number): EventResponse;
    get events_dropped(): number;
    set events_dropped(events_dropped: number);
    setEventsDropped(events_dropped: number): EventResponse;
    get message(): Array<Record<string, any>>;
    set message(message: Array<Record<string, any>>);
    setMessage(message: Array<Record<string, any>>): EventResponse;
}
