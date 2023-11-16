import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ShadowIGUserCatalogProductSearch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCatalogProductSearch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        image_url: "image_url";
        is_checkout_flow: "is_checkout_flow";
        merchant_id: "merchant_id";
        product_id: "product_id";
        product_name: "product_name";
        product_variants: "product_variants";
        retailer_id: "retailer_id";
        review_status: "review_status";
    }>;
}
