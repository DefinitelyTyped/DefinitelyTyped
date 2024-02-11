import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductFeedSchedule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        day_of_month: "day_of_month";
        day_of_week: "day_of_week";
        hour: "hour";
        id: "id";
        interval: "interval";
        interval_count: "interval_count";
        minute: "minute";
        timezone: "timezone";
        url: "url";
        username: "username";
    }>;
    static get Interval(): Readonly<{
        daily: "DAILY";
        hourly: "HOURLY";
        monthly: "MONTHLY";
        weekly: "WEEKLY";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductFeedSchedule>;
}
