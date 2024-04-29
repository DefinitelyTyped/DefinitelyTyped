import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecVideo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        caption_ids: "caption_ids";
        thumbnail_hash: "thumbnail_hash";
        thumbnail_url: "thumbnail_url";
        url_tags: "url_tags";
        video_id: "video_id";
    }>;
}
