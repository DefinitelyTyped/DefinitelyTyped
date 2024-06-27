import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessPageRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessPageRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      page: 'page'
    });
  }

}