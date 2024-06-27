import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCampaignMultiAds
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdCampaignMultiAds extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      enroll_status: 'enroll_status',
      source_type: 'source_type'
    });
  }

}