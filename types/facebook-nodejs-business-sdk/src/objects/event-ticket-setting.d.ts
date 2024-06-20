import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EventTicketSetting

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EventTicketSetting extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<EventTicketSetting>;
}
