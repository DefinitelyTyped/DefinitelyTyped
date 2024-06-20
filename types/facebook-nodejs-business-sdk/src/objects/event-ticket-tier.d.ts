import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTicketTier

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTicketTier extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EventTicketTier>;
}
