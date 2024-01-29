import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
import FacebookAdsApi from './../api';
/**
 * AdReportRun
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdReportRun extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        async_percent_completion: "async_percent_completion";
        async_status: "async_status";
        date_start: "date_start";
        date_stop: "date_stop";
        emails: "emails";
        friendly_name: "friendly_name";
        id: "id";
        is_bookmarked: "is_bookmarked";
        is_running: "is_running";
        schedule_id: "schedule_id";
        time_completed: "time_completed";
        time_ref: "time_ref";
    }>;
    getInsights(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getInsights(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getInsights(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<AdReportRun>;
    constructor(id?: number | string | null, data?: Record<any, any>, parentId?: string | null, api?: FacebookAdsApi | null);
}
