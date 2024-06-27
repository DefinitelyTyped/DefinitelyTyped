import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkAccessCode
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WorkAccessCode extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      code: 'code',
      expiration_time: 'expiration_time'
    });
  }

}