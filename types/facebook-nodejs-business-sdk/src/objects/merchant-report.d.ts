import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MerchantReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MerchantReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        add_to_cart: "add_to_cart";
        brand: "brand";
        catalog_segment_id: "catalog_segment_id";
        catalog_segment_purchase_value: "catalog_segment_purchase_value";
        category: "category";
        date: "date";
        latest_date: "latest_date";
        link_clicks: "link_clicks";
        merchant_currency: "merchant_currency";
        page_id: "page_id";
        product_id: "product_id";
        product_quantity: "product_quantity";
        product_total_value: "product_total_value";
        purchase: "purchase";
        purchase_value: "purchase_value";
    }>;
}
