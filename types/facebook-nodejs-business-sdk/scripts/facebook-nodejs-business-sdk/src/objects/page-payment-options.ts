import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PagePaymentOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PagePaymentOptions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      amex: 'amex',
      cash_only: 'cash_only',
      discover: 'discover',
      mastercard: 'mastercard',
      visa: 'visa'
    });
  }

}