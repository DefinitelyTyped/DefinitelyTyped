import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdvertiserVerificationStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdvertiserVerificationStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      banner_type: 'banner_type',
      grace_period_ends_at: 'grace_period_ends_at',
      ufac_redirect_uri: 'ufac_redirect_uri',
      verification_status: 'verification_status'
    });
  }

}