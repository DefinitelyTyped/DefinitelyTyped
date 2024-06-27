import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramInsightsValue
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class InstagramInsightsValue extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      end_time: 'end_time',
      value: 'value'
    });
  }

}