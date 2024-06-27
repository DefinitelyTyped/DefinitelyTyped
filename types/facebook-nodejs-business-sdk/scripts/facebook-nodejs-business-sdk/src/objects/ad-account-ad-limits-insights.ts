import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAdLimitsInsights
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountAdLimitsInsights extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      date_start: 'date_start',
      date_stop: 'date_stop'
    });
  }

}