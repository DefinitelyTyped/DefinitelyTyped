import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExtendedCreditEmail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ExtendedCreditEmail extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      email: 'email',
      id: 'id'
    });
  }

}