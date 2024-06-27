import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountYouthAdsAdvertiser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountYouthAdsAdvertiser extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      is_youth_ads_advertiser: 'is_youth_ads_advertiser'
    });
  }

}