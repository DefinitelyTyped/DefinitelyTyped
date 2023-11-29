import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ShadowIGMediaProductTags
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaProductTags extends AbstractCrudObject {
    static get Fields(): Readonly<{
        image_url: "image_url";
        is_checkout: "is_checkout";
        merchant_id: "merchant_id";
        name: "name";
        price_string: "price_string";
        product_id: "product_id";
        review_status: "review_status";
        stripped_price_string: "stripped_price_string";
        stripped_sale_price_string: "stripped_sale_price_string";
        x: "x";
        y: "y";
    }>;
}
