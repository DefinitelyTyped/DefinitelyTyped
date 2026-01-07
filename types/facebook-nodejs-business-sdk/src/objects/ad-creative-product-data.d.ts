import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeProductData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeProductData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        product_id: "product_id";
        product_source: "product_source";
    }>;
}
