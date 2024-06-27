import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGUpcomingEvent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUpcomingEvent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        id: "id";
        start_time: "start_time";
        title: "title";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): IGUpcomingEvent;
    update(fields: Array<string>, params?: Record<string, any>): IGUpcomingEvent;
}
