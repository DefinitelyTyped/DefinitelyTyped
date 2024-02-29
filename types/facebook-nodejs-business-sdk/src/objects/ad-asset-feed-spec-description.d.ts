import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecDescription
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecDescription extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        text: "text";
        url_tags: "url_tags";
    }>;
}
