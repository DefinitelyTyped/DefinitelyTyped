import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BrandedContentEligibleSponsorIDs
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BrandedContentEligibleSponsorIDs extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      fb_page: 'fb_page',
      ig_account_v2: 'ig_account_v2',
      ig_approval_needed: 'ig_approval_needed'
    });
  }

}