import Event from './event';
import EventResponse from './event-response';
export default class EventRequest {
    _access_token: string;
    _page_id: string;
    _events: Event[];
    _partner_agent: string | null | undefined;
    _api: Record<string, any>;
    constructor(access_token: string, page_id: string, events?: Event[], partner_agent?: string | null);
    get events(): Event[];
    set events(events: Event[]);
    setEvents(events: Event[]): EventRequest;
    get partner_agent(): string | null | undefined;
    set partner_agent(partner_agent: string | null | undefined);
    setPartnerAgent(partner_agent: string): EventRequest;
    get access_token(): string;
    set access_token(access_token: string);
    setAccessToken(access_token: string): EventRequest;
    get page_id(): string;
    set page_id(page_id: string);
    setPageId(page_id: string): EventRequest;
    execute(): Promise<EventResponse>;
}
