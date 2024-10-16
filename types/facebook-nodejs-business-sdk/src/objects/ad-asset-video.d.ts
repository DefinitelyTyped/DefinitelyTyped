import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption_ids: "caption_ids";
        id: "id";
        source_image_url: "source_image_url";
        tag: "tag";
        thumbnail_hash: "thumbnail_hash";
        thumbnail_source: "thumbnail_source";
        thumbnail_url: "thumbnail_url";
        url: "url";
        url_tags: "url_tags";
        video_id: "video_id";
        video_name: "video_name";
    }>;
}
