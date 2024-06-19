import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderSavedReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderSavedReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdsReportBuilderSavedReport;
}
