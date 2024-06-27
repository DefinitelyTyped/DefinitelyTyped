import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AttributionSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AttributionSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      event_type: 'event_type',
      window_days: 'window_days'
    });
  }

}