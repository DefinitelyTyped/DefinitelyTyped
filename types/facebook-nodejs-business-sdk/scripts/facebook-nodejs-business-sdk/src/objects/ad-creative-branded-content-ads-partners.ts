import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeBrandedContentAdsPartners
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCreativeBrandedContentAdsPartners extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      fb_page_id: 'fb_page_id',
      identity_type: 'identity_type',
      ig_asset_id: 'ig_asset_id',
      ig_user_id: 'ig_user_id'
    });
  }

}