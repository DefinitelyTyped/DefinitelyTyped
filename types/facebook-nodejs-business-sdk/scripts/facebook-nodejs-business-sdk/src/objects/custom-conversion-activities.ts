import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomConversionActivities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CustomConversionActivities extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      app_id: 'app_id',
      data: 'data',
      event_type: 'event_type',
      timestamp: 'timestamp'
    });
  }

}