import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetFeedAdditionalDataReconsiderationOffer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetFeedAdditionalDataReconsiderationOffer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        offer_id: "offer_id";
        offer_name: "offer_name";
    }>;
}
