import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReportScheduler

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderMMMReportScheduler extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsReportBuilderMMMReportScheduler>;
}
