import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecAssetCustomizationRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecAssetCustomizationRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body_label: "body_label";
        call_to_action_label: "call_to_action_label";
        call_to_action_type_label: "call_to_action_type_label";
        caption_label: "caption_label";
        carousel_label: "carousel_label";
        customization_spec: "customization_spec";
        description_label: "description_label";
        image_label: "image_label";
        is_default: "is_default";
        link_url_label: "link_url_label";
        priority: "priority";
        title_label: "title_label";
        video_label: "video_label";
    }>;
}
