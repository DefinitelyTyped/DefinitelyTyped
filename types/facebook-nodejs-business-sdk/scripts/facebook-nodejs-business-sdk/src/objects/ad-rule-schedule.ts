import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdRuleSchedule extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      days: 'days',
      end_minute: 'end_minute',
      start_minute: 'start_minute'
    });
  }

}