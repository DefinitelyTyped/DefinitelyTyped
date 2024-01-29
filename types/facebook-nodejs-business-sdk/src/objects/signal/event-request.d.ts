import BusinessDataEventRequest from '../businessdataapi/event-request';
import ServerEventRequest from '../serverside/event-request';
import HttpServiceInterface from '../serverside/http-service-interface';
import SignalEvent from './event';
/**
 * EventRequest
 */
export default class EventRequest {
    _business_data_event_request: BusinessDataEventRequest;
    _server_event_request: ServerEventRequest;
    /**
     * @param {String} access_token Access Token for the user calling Graph API
     * @param {String} pixel_id Pixel Id to which you are sending the events
     * @param {String} page_id Page Id to which you are sending the events
     * @param {SignalEvent[]} events Data for the request Payload for a Server Side Event
     * @param {?String} partner_agent Platform from which the event is sent e.g. wordpress
     * @param {?String} test_event_code Test Event Code used to verify that your server events are received correctly by Facebook.
     * @param {?String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     * @param {?String} upload_id Unique id used to denote the current set being uploaded.
     * @param {?String} upload_tag Tag string added to track your Offline event uploads.
     * @param {?String} upload_source The origin/source of data for the dataset to be uploaded.
     * @param {Boolean} debug_mode_flag Set to true if you want to enable more logging in SDK
     * @param {?HttpServiceInterface} http_service Override the default http request method by setting an object that implements HttpServiceInterface
     */
    constructor(access_token: string, pixel_id: string, page_id: string, events?: SignalEvent[], partner_agent?: string | null, test_event_code?: string | null, namespace_id?: string | null, upload_id?: string | null, upload_tag?: string | null, upload_source?: string | null, debug_mode_flag?: boolean, http_service?: HttpServiceInterface | null);
    /**
     * Gets the data for the request Payload for a Server Side Event and Business Data Event.
     */
    get events(): SignalEvent[];
    /**
     * Sets the events for the request Payload for a Server Side Event and Business Data Event.
     * @param events for the current event
     */
    set events(events: SignalEvent[]);
    /**
     * Sets the events for the request Payload for a Server Side Event and Business Data Event.
     * @param {SignalEvent[]} events for the current event
     */
    setEvents(events: SignalEvent[]): EventRequest;
    /**
     * Gets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress, Zapier
     */
    get partner_agent(): string;
    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress, Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    set partner_agent(partner_agent: string);
    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. wordpress
     * @param {String} partner_agent String value for the partner agent
     */
    setPartnerAgent(partner_agent: string): EventRequest;
    /**
     * Gets the test_event_code for the request
     */
    get test_event_code(): string;
    /**
     * Sets the test_event_code for the request
     */
    set test_event_code(test_event_code: string);
    /**
     * Sets the test_event_code for the request
     */
    setTestEventCode(test_event_code: string): EventRequest;
    /**
     * Gets the debug mode flag for the Graph API request
     */
    get debug_mode(): boolean;
    /**
     * Sets the debug mode flag for the Graph API request
     * @param debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
     */
    set debug_mode(debug_mode: boolean);
    /**
     * Sets the debug mode flag for the Graph API request
     * @param {Boolean} debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
     */
    setDebugMode(debug_mode: boolean): EventRequest;
    /**
     * Gets the access token for the Graph API request
     */
    get access_token(): string;
    /**
     * Sets the access token for the Graph API request
     * @param access_token string representing the access token that is used to make the Graph API.
     */
    set access_token(access_token: string);
    /**
     * Sets the access token for the Graph API request
     * @param {String} access_token string representing the access token that is used to make the Graph API.
     */
    setAccessToken(access_token: string): EventRequest;
    /**
     * Gets the pixel against which we send the events
     */
    get pixel_id(): string;
    /**
     * Sets the pixel against which we send the events
     * @param {String} pixel_id string value representing the Pixel's Id to which you are sending the events.
     */
    set pixel_id(pixel_id: string);
    /**
     * Sets the pixel against which we send the events
     * @param {String} pixel_id String value for the pixel_id against which you want to send the events.
     */
    setPixelId(pixel_id: string): EventRequest;
    /**
     * Gets the NamespaceId for the events
     */
    get namespace_id(): string;
    /**
     * Sets the namespace_id for the events
     * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     */
    set namespace_id(namespace_id: string);
    /**
     * Sets the namespace_id for the events
     * @param {String} namespace_id Scope used to resolve extern_id or Third-party ID. Can be another data set or data partner ID.
     */
    setNamespaceId(namespace_id: string): EventRequest;
    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_tag(): string;
    /**
     * Sets the upload_tag for the current events upload
     * @param {String} upload_tag Tag string added to Track your Offline event uploads
     */
    set upload_tag(upload_tag: string);
    /**
     * Sets the upload_tag for the current events upload
     * @param {String} upload_tag Tag string added to Track your Offline event uploads
     */
    setUploadTag(upload_tag: string): EventRequest;
    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_id(): string;
    /**
     * Sets the upload_id for the current events upload
     * @param {String} upload_id Unique id used to denote the current set being uploaded
     */
    set upload_id(upload_id: string);
    /**
     * Sets the upload_id for the current events upload
     * @param {String} upload_id Unique id used to denote the current set being uploaded
     */
    setUploadId(upload_id: string): EventRequest;
    /**
     * Gets the Upload Tag for the current events upload
     */
    get upload_source(): string;
    /**
     * Sets the upload_source for the current events upload
     * @param {String} upload_source origin/source of data for the dataset to be uploaded.
     */
    set upload_source(upload_source: string);
    /**
     * Sets the upload_source for the current events upload
     * @param {String} upload_source origin/source of data for the dataset to be uploaded.
     */
    setUploadSource(upload_source: string): EventRequest;
    /**
     * Gets the http_service object for making the events request
     */
    get http_service(): HttpServiceInterface;
    /**
     * Sets the http_service object for making the events request
     * @param {HttpServiceInterface} http_service
     */
    set http_service(http_service: HttpServiceInterface);
    /**
     * Sets the http_service object for making the events request
     * @param {HttpServiceInterface} http_service
     */
    setHttpService(http_service: HttpServiceInterface): EventRequest;
    /**
     * Executes the current event_request data by making a call to the Facebook Graph API.
     */
    execute(): Promise<Record<any, any>>;
}
