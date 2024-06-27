import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnershipAdsIdentity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PartnershipAdsIdentity extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      post_types: 'post_types',
      secondary_identities: 'secondary_identities'
    });
  }

}