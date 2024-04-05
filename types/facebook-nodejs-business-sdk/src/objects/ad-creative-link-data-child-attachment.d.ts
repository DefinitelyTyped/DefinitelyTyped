import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataChildAttachment
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataChildAttachment extends AbstractCrudObject {
    static get Fields(): Readonly<{
        call_to_action: "call_to_action";
        caption: "caption";
        description: "description";
        image_crops: "image_crops";
        image_hash: "image_hash";
        link: "link";
        name: "name";
        picture: "picture";
        place_data: "place_data";
        static_card: "static_card";
        video_id: "video_id";
    }>;
}
