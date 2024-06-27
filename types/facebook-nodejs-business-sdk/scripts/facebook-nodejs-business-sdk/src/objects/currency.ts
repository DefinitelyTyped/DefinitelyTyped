import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Currency
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class Currency extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      currency_offset: 'currency_offset',
      usd_exchange: 'usd_exchange',
      usd_exchange_inverse: 'usd_exchange_inverse',
      user_currency: 'user_currency'
    });
  }

}