import ServerEvent from "./server-event";
import EventRequest from "./event-request";
import EventResponse from "./event-response";
export default class BatchProcessor {
    _batch_size: number;
    _concurrent_requests: number;
    constructor(batch_size: number, concurrent_requests: number);
    processEventRequestsGenerator(event_requests: EventRequest[]): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
    processEventRequests(event_requests: EventRequest[]): Promise<void>;
    processEventsGenerator(event_request_to_clone: EventRequest, all_events: ServerEvent[]): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
    processEvents(event_request_to_clone: EventRequest, all_events: ServerEvent[]): Promise<void>;
}
