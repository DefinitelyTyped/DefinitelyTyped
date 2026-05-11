import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageInsightsAsyncExportRun
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageInsightsAsyncExportRun extends AbstractCrudObject {
    static get Fields(): Readonly<{
        data_level: "data_level";
        filters: "filters";
        format: "format";
        gen_report_date: "gen_report_date";
        id: "id";
        report_end_date: "report_end_date";
        report_start_date: "report_start_date";
        sorters: "sorters";
        status: "status";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<PageInsightsAsyncExportRun>;
}
