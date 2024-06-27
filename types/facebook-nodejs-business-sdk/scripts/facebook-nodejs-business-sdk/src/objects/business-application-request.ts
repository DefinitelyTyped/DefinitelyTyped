import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessApplicationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessApplicationRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      application: 'application',
      id: 'id'
    });
  }

}