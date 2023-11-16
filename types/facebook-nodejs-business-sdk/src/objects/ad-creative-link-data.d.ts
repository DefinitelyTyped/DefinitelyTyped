import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_context: "ad_context";
        additional_image_index: "additional_image_index";
        app_link_spec: "app_link_spec";
        attachment_style: "attachment_style";
        automated_product_tags: "automated_product_tags";
        branded_content_shared_to_sponsor_status: "branded_content_shared_to_sponsor_status";
        branded_content_sponsor_page_id: "branded_content_sponsor_page_id";
        call_to_action: "call_to_action";
        caption: "caption";
        child_attachments: "child_attachments";
        collection_thumbnails: "collection_thumbnails";
        customization_rules_spec: "customization_rules_spec";
        description: "description";
        event_id: "event_id";
        force_single_link: "force_single_link";
        format_option: "format_option";
        image_crops: "image_crops";
        image_hash: "image_hash";
        image_layer_specs: "image_layer_specs";
        image_overlay_spec: "image_overlay_spec";
        link: "link";
        message: "message";
        multi_share_end_card: "multi_share_end_card";
        multi_share_optimized: "multi_share_optimized";
        name: "name";
        offer_id: "offer_id";
        page_welcome_message: "page_welcome_message";
        picture: "picture";
        post_click_configuration: "post_click_configuration";
        preferred_image_tags: "preferred_image_tags";
        retailer_item_ids: "retailer_item_ids";
        show_multiple_images: "show_multiple_images";
        static_fallback_spec: "static_fallback_spec";
        use_flexible_image_aspect_ratio: "use_flexible_image_aspect_ratio";
    }>;
    static get FormatOption(): Readonly<{
        carousel_ar_effects: "carousel_ar_effects";
        carousel_images_multi_items: "carousel_images_multi_items";
        carousel_images_single_item: "carousel_images_single_item";
        carousel_slideshows: "carousel_slideshows";
        single_image: "single_image";
    }>;
}
