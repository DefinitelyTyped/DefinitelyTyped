import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * StreamFilter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class StreamFilter extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      filter_key: 'filter_key',
      name: 'name',
      type: 'type'
    });
  }

}