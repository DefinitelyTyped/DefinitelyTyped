import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsAnomalyDetection
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsAnomalyDetection extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      anomaly_data: 'anomaly_data',
      day: 'day'
    });
  }

}