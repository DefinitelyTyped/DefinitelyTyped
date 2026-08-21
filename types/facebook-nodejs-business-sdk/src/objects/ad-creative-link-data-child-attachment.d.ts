import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataChildAttachment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataChildAttachment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android_url: "android_url";
        call_to_action: "call_to_action";
        caption: "caption";
        description: "description";
        ig_media_id: "ig_media_id";
        image_crops: "image_crops";
        image_hash: "image_hash";
        ios_url: "ios_url";
        link: "link";
        marketing_message_buttons: "marketing_message_buttons";
        name: "name";
        picture: "picture";
        place_data: "place_data";
        static_card: "static_card";
        video_id: "video_id";
    }>;
}
