import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventExternalTicketInfo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventExternalTicketInfo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EventExternalTicketInfo>;
}
