import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetUsage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        product_set: "product_set";
        usage_type: "usage_type";
    }>;
    get(fields: Array<string>, params?: Record<string, any>): ProductSetUsage;
}
