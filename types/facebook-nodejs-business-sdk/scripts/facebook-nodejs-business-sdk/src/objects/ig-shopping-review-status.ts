import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGShoppingReviewStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGShoppingReviewStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      onsite_eligibility: 'onsite_eligibility',
      reasons: 'reasons',
      status: 'status'
    });
  }

}