import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecCarouselChildAttachment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecCarouselChildAttachment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body_label: "body_label";
        call_to_action_type_label: "call_to_action_type_label";
        caption_label: "caption_label";
        description_label: "description_label";
        image_label: "image_label";
        link_url_label: "link_url_label";
        phone_data_ids_label: "phone_data_ids_label";
        static_card: "static_card";
        title_label: "title_label";
        video_label: "video_label";
    }>;
}
