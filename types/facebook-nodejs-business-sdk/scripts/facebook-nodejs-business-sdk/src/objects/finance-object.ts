import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * FinanceObject
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class FinanceObject extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      finance_permission: 'finance_permission',
      user: 'user'
    });
  }

}