import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AgeRange
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AgeRange extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      max: 'max',
      min: 'min'
    });
  }

}