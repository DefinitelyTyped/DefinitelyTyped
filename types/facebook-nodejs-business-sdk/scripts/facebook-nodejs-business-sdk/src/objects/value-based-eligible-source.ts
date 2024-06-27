import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ValueBasedEligibleSource
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ValueBasedEligibleSource extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      title: 'title',
      type: 'type'
    });
  }

}