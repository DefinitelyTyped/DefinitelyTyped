import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyMeasurementReportDataset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyMeasurementReportDataset extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category: "category";
        id: "id";
        partner: "partner";
        product: "product";
        schema: "schema";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): ThirdPartyMeasurementReportDataset;
}
