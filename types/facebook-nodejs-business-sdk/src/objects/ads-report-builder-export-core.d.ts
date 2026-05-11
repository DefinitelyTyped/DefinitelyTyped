import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderExportCore
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderExportCore extends AbstractCrudObject {
    static get Fields(): Readonly<{
        async_percent_completion: "async_percent_completion";
        async_report_url: "async_report_url";
        async_status: "async_status";
        client_creation_value: "client_creation_value";
        expiry_time: "expiry_time";
        export_download_time: "export_download_time";
        export_format: "export_format";
        export_name: "export_name";
        export_type: "export_type";
        has_seen: "has_seen";
        id: "id";
        is_sharing: "is_sharing";
        link_sharing_expiration_time: "link_sharing_expiration_time";
        link_sharing_uri: "link_sharing_uri";
        time_completed: "time_completed";
        time_start: "time_start";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsReportBuilderExportCore>;
}
