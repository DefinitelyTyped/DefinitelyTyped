import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemLocalInfo

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemLocalInfo extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductItemLocalInfo>;
}
