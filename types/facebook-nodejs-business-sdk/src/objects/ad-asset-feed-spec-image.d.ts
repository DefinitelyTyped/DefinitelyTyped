import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecImage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecImage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        hash: "hash";
        image_crops: "image_crops";
        url: "url";
        url_tags: "url_tags";
    }>;
}
