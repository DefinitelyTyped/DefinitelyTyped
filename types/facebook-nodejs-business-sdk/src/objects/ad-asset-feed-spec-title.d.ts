import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecTitle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecTitle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        text: "text";
        url_tags: "url_tags";
    }>;
}
