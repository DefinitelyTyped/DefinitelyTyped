import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUpcomingEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUpcomingEvent extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): IGUpcomingEvent;
    update(fields: Array<string>, params?: Record<string, any>): IGUpcomingEvent;
}
