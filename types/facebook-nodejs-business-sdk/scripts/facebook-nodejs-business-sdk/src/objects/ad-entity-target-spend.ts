import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdEntityTargetSpend
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdEntityTargetSpend extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      amount: 'amount',
      has_error: 'has_error',
      is_accurate: 'is_accurate',
      is_prorated: 'is_prorated',
      is_updating: 'is_updating'
    });
  }

}