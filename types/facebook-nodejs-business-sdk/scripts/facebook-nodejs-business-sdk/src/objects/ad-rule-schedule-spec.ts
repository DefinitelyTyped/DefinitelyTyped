import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdRuleScheduleSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdRuleScheduleSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      schedule: 'schedule',
      schedule_type: 'schedule_type'
    });
  }

}