import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramRelatedProductTags
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramRelatedProductTags extends AbstractCrudObject {
    static get Fields(): Readonly<{
        checkout_setting: "checkout_setting";
        id: "id";
        image_uri: "image_uri";
        name: "name";
        price_label: "price_label";
        sale_price_label: "sale_price_label";
    }>;
}
