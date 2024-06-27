import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductFeedSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductFeedSchedule extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      day_of_month: 'day_of_month',
      day_of_week: 'day_of_week',
      hour: 'hour',
      id: 'id',
      interval: 'interval',
      interval_count: 'interval_count',
      minute: 'minute',
      timezone: 'timezone',
      url: 'url',
      username: 'username'
    });
  }

  static get Interval() {
    return Object.freeze({
      daily: 'DAILY',
      hourly: 'HOURLY',
      monthly: 'MONTHLY',
      weekly: 'WEEKLY'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductFeedSchedule {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}