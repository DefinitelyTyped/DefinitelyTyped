import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageUpcomingChange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUpcomingChange extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): PageUpcomingChange;
}
