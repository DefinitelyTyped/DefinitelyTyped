import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdBidAdjustments
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdBidAdjustments extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      age_range: 'age_range',
      page_types: 'page_types',
      user_groups: 'user_groups'
    });
  }

}