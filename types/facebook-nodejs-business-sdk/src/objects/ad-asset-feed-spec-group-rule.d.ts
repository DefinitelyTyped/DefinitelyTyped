import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecGroupRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecGroupRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        body_label: "body_label";
        caption_label: "caption_label";
        description_label: "description_label";
        image_label: "image_label";
        link_url_label: "link_url_label";
        title_label: "title_label";
        video_label: "video_label";
    }>;
}
