import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUpcomingEvent

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUpcomingEvent extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUpcomingEvent>;    get(fields: string[], params?: Record<string, any>): Promise<IGUpcomingEvent>;
}
