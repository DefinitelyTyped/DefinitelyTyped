import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedAdditionalData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedAdditionalData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        automated_product_tags: "automated_product_tags";
        brand_page_id: "brand_page_id";
        is_click_to_message: "is_click_to_message";
        multi_share_end_card: "multi_share_end_card";
        page_welcome_message: "page_welcome_message";
        partner_app_welcome_message_flow_id: "partner_app_welcome_message_flow_id";
    }>;
}
