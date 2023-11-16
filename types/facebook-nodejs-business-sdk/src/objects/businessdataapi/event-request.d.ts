import Event from './event';
import EventResponse from './event-response';
/**
 * EventRequest for Business Data API
 */
export default class EventRequest {
    _access_token: string;
    _page_id: string;
    _events: Event[];
    _partner_agent: string | null | undefined;
    _api: Record<any, any>;
    /**
     * @param {String} access_token Access Token for the user calling Graph API
     * @param {String} page_id Page Id to which you are sending the events
     * @param {Event[]} events Data for the request Payload for a Business Data Event
     * @param {String} partner_agent Platform from which the event is sent e.g. Zapier
     */
    constructor(access_token: string, page_id: string, events?: Event[], partner_agent?: string | null);
    /**
     * Gets the data for the request Payload for a Business Data Event.
     */
    get events(): Event[];
    /**
     * Sets the events for the request Payload for a Business Data Event.
     * @param events for the current event
     */
    set events(events: Event[]);
    /**
     * Sets the events for the request Payload for a Business Data Event.
     * @param events for the current event
     */
    setEvents(events: Event[]): EventRequest;
    /**
     * Gets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     */
    get partner_agent(): string | null | undefined;
    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    set partner_agent(partner_agent: string);
    /**
     * Sets the partner_agent for the request
     * Allows you to specify the platform from which the event is sent e.g. Zapier
     * @param {String} partner_agent String value for the partner agent
     */
    setPartnerAgent(partner_agent: string): EventRequest;
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
     * Gets the page id against which we send the events
     */
    get page_id(): string;
    /**
     * Sets the page id against which we send the events
     * @param {String} page_id string value representing the page id to which you are sending the events.
     */
    set page_id(page_id: string);
    /**
     * Sets the page id against which we send the events
     * @param {String} page_id string value representing the page id to which you are sending the events.
     */
    setPageId(page_id: string): EventRequest;
    /**
     * Executes the current event_request data by making a call to the Facebook Graph API.
     */
    execute(): Promise<EventResponse>;
}
