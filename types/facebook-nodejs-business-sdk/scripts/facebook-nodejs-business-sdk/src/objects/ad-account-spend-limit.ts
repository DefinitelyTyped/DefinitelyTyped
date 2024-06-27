import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSpendLimit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountSpendLimit extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      amount_spent: 'amount_spent',
      group_id: 'group_id',
      limit_id: 'limit_id',
      limit_value: 'limit_value',
      time_created: 'time_created',
      time_start: 'time_start',
      time_stop: 'time_stop'
    });
  }

}