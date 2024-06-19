import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderMMMReportScheduler
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderMMMReportScheduler extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): AdsReportBuilderMMMReportScheduler;
}
