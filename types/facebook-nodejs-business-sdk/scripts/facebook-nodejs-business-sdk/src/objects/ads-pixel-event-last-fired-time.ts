import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelEventLastFiredTime
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelEventLastFiredTime extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      event: 'event',
      last_fired_time: 'last_fired_time'
    });
  }

}