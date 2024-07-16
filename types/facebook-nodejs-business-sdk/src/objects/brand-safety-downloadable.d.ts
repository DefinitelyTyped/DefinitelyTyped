import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandSafetyDownloadable
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandSafetyDownloadable extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_context_id: "account_context_id";
        async_job_percent_complete: "async_job_percent_complete";
        async_job_status: "async_job_status";
        file_name: "file_name";
        id: "id";
        request_surface: "request_surface";
        url: "url";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<BrandSafetyDownloadable>;
}
