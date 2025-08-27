import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundleFolder
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicItemDisplayBundleFolder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        categorization_criteria: "categorization_criteria";
        id: "id";
        name: "name";
        product_catalog: "product_catalog";
        product_set: "product_set";
        valid_labels: "valid_labels";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<DynamicItemDisplayBundleFolder>;
}
