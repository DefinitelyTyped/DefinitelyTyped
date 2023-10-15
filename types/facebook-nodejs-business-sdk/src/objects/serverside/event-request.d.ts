import EventResponse from './event-response';
import HttpServiceInterface from './http-service-interface';
import ServerEvent from './server-event';
export default class EventRequest {
    _access_token: string;
    _pixel_id: string;
    _events: ServerEvent[];
    _partner_agent: string | null | undefined;
    _test_event_code: string | null | undefined;
    _namespace_id: string | null | undefined;
    _upload_id: string | null | undefined;
    _upload_tag: string | null | undefined;
    _upload_source: string | null | undefined;
    _debug_mode: boolean;
    _api: Record<string, any>;
    _http_service: HttpServiceInterface | null | undefined;
    constructor(
        access_token: string,
        pixel_id: string,
        events?: ServerEvent[],
        partner_agent?: string | null,
        test_event_code?: string | null,
        namespace_id?: string | null,
        upload_id?: string | null,
        upload_tag?: string | null,
        upload_source?: string | null,
        debug_mode_flag?: boolean,
        http_service?: HttpServiceInterface | null,
    );
    get events(): ServerEvent[];
    set events(events: ServerEvent[]);
    setEvents(events: ServerEvent[]): EventRequest;
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
    get pixel(): string;
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
    execute(): Promise<EventResponse>;
    cloneWithoutEvents(): EventRequest;
}
