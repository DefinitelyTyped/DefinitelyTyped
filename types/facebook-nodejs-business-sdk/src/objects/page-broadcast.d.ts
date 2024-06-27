import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageBroadcast
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageBroadcast extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        scheduled_time: "scheduled_time";
        status: "status";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): PageBroadcast;
}
