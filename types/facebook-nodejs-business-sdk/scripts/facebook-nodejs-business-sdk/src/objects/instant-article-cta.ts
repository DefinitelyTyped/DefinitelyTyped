import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstantArticleCTA
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class InstantArticleCTA extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      is_enabled: 'is_enabled',
      publisher_defined_value: 'publisher_defined_value',
      type: 'type',
      update_time: 'update_time'
    });
  }

}