import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomConversionStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CustomConversionStatsResult extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      timestamp: 'timestamp'
    });
  }

  static get Aggregation() {
    return Object.freeze({
      count: 'count',
      device_type: 'device_type',
      host: 'host',
      pixel_fire: 'pixel_fire',
      unmatched_count: 'unmatched_count',
      unmatched_usd_amount: 'unmatched_usd_amount',
      url: 'url',
      usd_amount: 'usd_amount'
    });
  }

}