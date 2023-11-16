import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageUpcomingChange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUpcomingChange extends AbstractCrudObject {
    static get Fields(): Readonly<{
        change_type: "change_type";
        effective_time: "effective_time";
        id: "id";
        page: "page";
        proposal: "proposal";
        timer_status: "timer_status";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): PageUpcomingChange;
}
