import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreativeHistory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CreativeHistory extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      creative_fingerprint: 'creative_fingerprint',
      time_ranges: 'time_ranges'
    });
  }

}