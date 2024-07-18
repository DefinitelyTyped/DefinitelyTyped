import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetUsage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetUsage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        product_set: "product_set";
        usage_type: "usage_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductSetUsage>;
}
