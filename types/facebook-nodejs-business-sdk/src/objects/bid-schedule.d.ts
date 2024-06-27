import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BidSchedule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BidSchedule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_object_id: "ad_object_id";
        bid_recurrence_type: "bid_recurrence_type";
        bid_timezone: "bid_timezone";
        bid_value: "bid_value";
        id: "id";
        status: "status";
        time_end: "time_end";
        time_start: "time_start";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BidSchedule>;
}
