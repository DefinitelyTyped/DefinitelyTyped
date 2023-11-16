import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProductFeedUploadErrorSample
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadErrorSample extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        retailer_id: "retailer_id";
        row_number: "row_number";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<ProductFeedUploadErrorSample>;
}
