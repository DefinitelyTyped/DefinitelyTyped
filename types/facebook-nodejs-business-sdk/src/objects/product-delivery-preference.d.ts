import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductDeliveryPreference
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductDeliveryPreference extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_object_id: "ad_object_id";
        id: "id";
        product_priority: "product_priority";
        product_priority_category: "product_priority_category";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductDeliveryPreference>;
}
