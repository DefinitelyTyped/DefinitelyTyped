import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderSavedReport

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderSavedReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsReportBuilderSavedReport>;
}
