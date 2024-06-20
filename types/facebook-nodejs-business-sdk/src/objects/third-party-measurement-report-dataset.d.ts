import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyMeasurementReportDataset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyMeasurementReportDataset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyMeasurementReportDataset>;
}
