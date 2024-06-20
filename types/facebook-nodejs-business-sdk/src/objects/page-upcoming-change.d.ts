import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageUpcomingChange

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUpcomingChange extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PageUpcomingChange>;
}
