import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAssetFeedSpecCaption
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecCaption extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        text: "text";
        url_tags: "url_tags";
    }>;
}
