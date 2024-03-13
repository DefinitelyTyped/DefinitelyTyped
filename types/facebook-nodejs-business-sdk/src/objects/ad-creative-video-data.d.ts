import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeVideoData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        additional_image_index: "additional_image_index";
        branded_content_shared_to_sponsor_status: "branded_content_shared_to_sponsor_status";
        branded_content_sponsor_page_id: "branded_content_sponsor_page_id";
        call_to_action: "call_to_action";
        collection_thumbnails: "collection_thumbnails";
        customization_rules_spec: "customization_rules_spec";
        image_hash: "image_hash";
        image_url: "image_url";
        link_description: "link_description";
        message: "message";
        offer_id: "offer_id";
        page_welcome_message: "page_welcome_message";
        post_click_configuration: "post_click_configuration";
        retailer_item_ids: "retailer_item_ids";
        targeting: "targeting";
        title: "title";
        video_id: "video_id";
    }>;
}
