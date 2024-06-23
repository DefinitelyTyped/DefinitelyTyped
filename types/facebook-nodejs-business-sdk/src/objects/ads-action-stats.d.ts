import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdsActionStats
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsActionStats extends AbstractCrudObject {
    static get Fields(): Readonly<{
        value_1d_click: "1d_click";
        value_1d_ev: "1d_ev";
        value_1d_view: "1d_view";
        value_28d_click: "28d_click";
        value_28d_view: "28d_view";
        value_7d_click: "7d_click";
        value_7d_view: "7d_view";
        action_brand: "action_brand";
        action_canvas_component_id: "action_canvas_component_id";
        action_canvas_component_name: "action_canvas_component_name";
        action_carousel_card_id: "action_carousel_card_id";
        action_carousel_card_name: "action_carousel_card_name";
        action_category: "action_category";
        action_converted_product_id: "action_converted_product_id";
        action_destination: "action_destination";
        action_device: "action_device";
        action_event_channel: "action_event_channel";
        action_link_click_destination: "action_link_click_destination";
        action_location_code: "action_location_code";
        action_reaction: "action_reaction";
        action_target_id: "action_target_id";
        action_type: "action_type";
        action_video_asset_id: "action_video_asset_id";
        action_video_sound: "action_video_sound";
        action_video_type: "action_video_type";
        dda: "dda";
        inline: "inline";
        interactive_component_sticker_id: "interactive_component_sticker_id";
        interactive_component_sticker_response: "interactive_component_sticker_response";
        skan_click: "skan_click";
        skan_view: "skan_view";
        value: "value";
    }>;
}
