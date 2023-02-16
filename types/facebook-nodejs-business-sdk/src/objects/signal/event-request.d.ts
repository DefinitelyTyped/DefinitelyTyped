import BusinessDataEventRequest from '../businessdataapi/event-request';
import ServerEventRequest from '../serverside/event-request';
import HttpServiceInterface from '../serverside/http-service-interface';
import SignalEvent from './event';
export default class EventRequest {
    _business_data_event_request: BusinessDataEventRequest;
    _server_event_request: ServerEventRequest;
    constructor(
        access_token: string,
        pixel_id: string,
        page_id: string,
        events?: SignalEvent[],
        partner_agent?: string | null,
        test_event_code?: string | null,
        namespace_id?: string | null,
        upload_id?: string | null,
        upload_tag?: string | null,
        upload_source?: string | null,
        debug_mode_flag?: boolean,
        http_service?: HttpServiceInterface | null,
    );
    get events(): SignalEvent[];
    set events(events: SignalEvent[]);
    setEvents(events: SignalEvent[]): EventRequest;
    get partner_agent(): string;
    set partner_agent(partner_agent: string);
    setPartnerAgent(partner_agent: string): EventRequest;
    get test_event_code(): string;
    set test_event_code(test_event_code: string);
    setTestEventCode(test_event_code: string): EventRequest;
    get debug_mode(): boolean;
    set debug_mode(debug_mode: boolean);
    setDebugMode(debug_mode: boolean): EventRequest;
    get access_token(): string;
    set access_token(access_token: string);
    setAccessToken(access_token: string): EventRequest;
    get pixel_id(): string;
    set pixel_id(pixel_id: string);
    setPixelId(pixel_id: string): EventRequest;
    get namespace_id(): string;
    set namespace_id(namespace_id: string);
    setNamespaceId(namespace_id: string): EventRequest;
    get upload_tag(): string;
    set upload_tag(upload_tag: string);
    setUploadTag(upload_tag: string): EventRequest;
    get upload_id(): string;
    set upload_id(upload_id: string);
    setUploadId(upload_id: string): EventRequest;
    get upload_source(): string;
    set upload_source(upload_source: string);
    setUploadSource(upload_source: string): EventRequest;
    get http_service(): HttpServiceInterface;
    set http_service(http_service: HttpServiceInterface);
    setHttpService(http_service: HttpServiceInterface): EventRequest;
    execute(): Promise<Record<string, any>>;
}
