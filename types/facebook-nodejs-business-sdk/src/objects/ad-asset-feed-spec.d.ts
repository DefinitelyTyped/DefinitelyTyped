import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get CallToActionTypes(): Record<string, any>;
}
