import ServerEvent from "./server-event";
import EventRequest from "./event-request";
import EventResponse from "./event-response";
export default class BatchProcessor {
    _batch_size: number;
    _concurrent_requests: number;
    constructor(batch_size: number, concurrent_requests: number);
    processEventRequestsGenerator(event_requests: Array<EventRequest>): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
    processEventRequests(event_requests: Array<EventRequest>): Promise<void>;
    processEventsGenerator(event_request_to_clone: EventRequest, all_events: Array<ServerEvent>): Generator<Array<Promise<EventResponse>>, void, EventRequest>;
    processEvents(event_request_to_clone: EventRequest, all_events: Array<ServerEvent>): Promise<void>;
}
