import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountYouthAdsAdvertiser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountYouthAdsAdvertiser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_youth_ads_advertiser: "is_youth_ads_advertiser";
    }>;
}
