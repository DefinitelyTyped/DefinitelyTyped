import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemInsights
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemInsights extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_click_count: "ad_click_count";
        ad_impression_count: "ad_impression_count";
        add_to_cart_count: "add_to_cart_count";
        purchase_count: "purchase_count";
        view_content_count: "view_content_count";
    }>;
}
