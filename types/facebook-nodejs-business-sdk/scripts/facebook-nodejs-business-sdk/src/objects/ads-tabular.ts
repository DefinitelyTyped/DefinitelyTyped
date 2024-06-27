import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsTabular
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsTabular extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      rows: 'rows'
    });
  }

}