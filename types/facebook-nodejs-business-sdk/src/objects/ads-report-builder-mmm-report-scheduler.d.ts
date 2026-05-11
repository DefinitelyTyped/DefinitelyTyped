import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReportScheduler
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderMMMReportScheduler extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_ids: "ad_account_ids";
        filtering: "filtering";
        id: "id";
        report_name: "report_name";
        schedule_frequency: "schedule_frequency";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsReportBuilderMMMReportScheduler>;
}
