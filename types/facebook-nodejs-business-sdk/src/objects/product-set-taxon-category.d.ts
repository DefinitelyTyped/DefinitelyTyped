import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetTaxonCategory
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductSetTaxonCategory extends AbstractCrudObject {
    static get Fields(): Readonly<{
        category_id: "category_id";
        category_name: "category_name";
        image_url: "image_url";
    }>;
}
