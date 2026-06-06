import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpecCallToAction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpecCallToAction extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adlabels: "adlabels";
        type: "type";
        value: "value";
    }>;
}
