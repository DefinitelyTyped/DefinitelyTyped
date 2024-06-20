import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedUploadErrorSample

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadErrorSample extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeedUploadErrorSample>;
}
