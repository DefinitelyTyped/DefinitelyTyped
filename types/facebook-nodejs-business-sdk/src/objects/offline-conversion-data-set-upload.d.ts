import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * OfflineConversionDataSetUpload
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetUpload extends AbstractCrudObject {
    static get Fields(): Readonly<{
        api_calls: "api_calls";
        creation_time: "creation_time";
        duplicate_entries: "duplicate_entries";
        event_stats: "event_stats";
        event_time_max: "event_time_max";
        event_time_min: "event_time_min";
        first_upload_time: "first_upload_time";
        id: "id";
        is_excluded_for_lift: "is_excluded_for_lift";
        last_upload_time: "last_upload_time";
        match_rate_approx: "match_rate_approx";
        matched_entries: "matched_entries";
        upload_tag: "upload_tag";
        valid_entries: "valid_entries";
    }>;
    static get Order(): Readonly<{
        ascending: "ASCENDING";
        descending: "DESCENDING";
    }>;
    static get SortBy(): Readonly<{
        api_calls: "API_CALLS";
        creation_time: "CREATION_TIME";
        event_time_max: "EVENT_TIME_MAX";
        event_time_min: "EVENT_TIME_MIN";
        first_upload_time: "FIRST_UPLOAD_TIME";
        is_excluded_for_lift: "IS_EXCLUDED_FOR_LIFT";
        last_upload_time: "LAST_UPLOAD_TIME";
    }>;
    getProgress(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getProgress(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getProgress(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getPullSessions(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPullSessions(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPullSessions(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<OfflineConversionDataSetUpload>;
}
