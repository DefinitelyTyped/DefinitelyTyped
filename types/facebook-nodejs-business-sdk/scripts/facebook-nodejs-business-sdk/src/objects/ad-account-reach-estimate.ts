import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountReachEstimate
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountReachEstimate extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      estimate_ready: 'estimate_ready',
      users_lower_bound: 'users_lower_bound',
      users_upper_bound: 'users_upper_bound'
    });
  }

}