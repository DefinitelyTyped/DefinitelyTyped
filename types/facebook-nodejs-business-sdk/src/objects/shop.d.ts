import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Shop
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Shop extends AbstractCrudObject {
    static get Fields(): Readonly<{
        commerce_merchant_settings: "commerce_merchant_settings";
        fb_sales_channel: "fb_sales_channel";
        id: "id";
        ig_sales_channel: "ig_sales_channel";
        is_onsite_enabled: "is_onsite_enabled";
        shop_status: "shop_status";
        workspace: "workspace";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<Shop>;
}
