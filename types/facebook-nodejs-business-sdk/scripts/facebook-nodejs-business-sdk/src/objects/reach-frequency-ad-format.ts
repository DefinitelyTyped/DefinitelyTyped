import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ReachFrequencyAdFormat
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ReachFrequencyAdFormat extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      details: 'details',
      type: 'type'
    });
  }

}