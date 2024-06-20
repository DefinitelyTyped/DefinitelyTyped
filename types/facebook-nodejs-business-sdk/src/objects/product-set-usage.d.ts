import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetUsage

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetUsage extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductSetUsage>;
}
