import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * ProductFeedUpload
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUpload extends AbstractCrudObject {
    static get Fields(): Readonly<{
        end_time: "end_time";
        error_count: "error_count";
        error_report: "error_report";
        filename: "filename";
        id: "id";
        input_method: "input_method";
        num_deleted_items: "num_deleted_items";
        num_detected_items: "num_detected_items";
        num_invalid_items: "num_invalid_items";
        num_persisted_items: "num_persisted_items";
        start_time: "start_time";
        url: "url";
        warning_count: "warning_count";
    }>;
    static get InputMethod(): Readonly<{
        google_sheets_fetch: "Google Sheets Fetch";
        manual_upload: "Manual Upload";
        reupload_last_file: "Reupload Last File";
        server_fetch: "Server Fetch";
        user_initiated_server_fetch: "User initiated server fetch";
    }>;
    createErrorReport(fields: string[], params?: Record<any, any>, pathOverride?: string | null): Promise<ProductFeedUpload>;
    getErrors(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getErrors(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getErrors(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductFeedUpload>;
}
