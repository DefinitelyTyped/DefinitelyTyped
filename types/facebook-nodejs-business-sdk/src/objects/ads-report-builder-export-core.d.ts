import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsReportBuilderExportCore

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsReportBuilderExportCore extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsReportBuilderExportCore>;
}
