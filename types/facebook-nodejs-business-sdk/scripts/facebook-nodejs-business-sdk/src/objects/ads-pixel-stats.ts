import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelStats
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelStats extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      count: 'count',
      diagnostics_hourly_last_timestamp: 'diagnostics_hourly_last_timestamp',
      event: 'event',
      value: 'value'
    });
  }

}