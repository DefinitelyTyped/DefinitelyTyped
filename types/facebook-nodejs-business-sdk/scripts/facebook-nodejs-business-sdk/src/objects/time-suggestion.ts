import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TimeSuggestion
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TimeSuggestion extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      high_demand_periods: 'high_demand_periods',
      is_enabled: 'is_enabled'
    });
  }

}