import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemOffer

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemOffer extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductItemOffer>;
}
