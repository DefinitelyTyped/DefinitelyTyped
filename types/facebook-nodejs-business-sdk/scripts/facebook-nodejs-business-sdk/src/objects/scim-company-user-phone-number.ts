import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ScimCompanyUserPhoneNumber
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ScimCompanyUserPhoneNumber extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      number: 'number',
      primary: 'primary',
      type: 'type'
    });
  }

}