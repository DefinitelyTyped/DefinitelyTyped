import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FundingSourceDetails
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class FundingSourceDetails extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      coupon: 'coupon',
      coupons: 'coupons',
      display_string: 'display_string',
      id: 'id',
      type: 'type'
    });
  }

}