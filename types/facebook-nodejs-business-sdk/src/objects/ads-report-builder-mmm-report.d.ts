import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderMMMReport extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdsReportBuilderMMMReport;
}
