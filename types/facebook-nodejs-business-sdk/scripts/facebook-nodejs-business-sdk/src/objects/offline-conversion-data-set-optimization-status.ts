import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * OfflineConversionDataSetOptimizationStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OfflineConversionDataSetOptimizationStatus extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      event: 'event',
      last_changed_time: 'last_changed_time',
      last_detected_time: 'last_detected_time',
      status: 'status'
    });
  }

}