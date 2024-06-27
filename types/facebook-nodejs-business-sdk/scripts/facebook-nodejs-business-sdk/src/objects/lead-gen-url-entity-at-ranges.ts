import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenURLEntityAtRanges
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class LeadGenURLEntityAtRanges extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      length: 'length',
      offset: 'offset',
      url: 'url'
    });
  }

}