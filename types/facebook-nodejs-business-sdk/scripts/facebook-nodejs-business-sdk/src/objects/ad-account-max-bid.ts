import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountMaxBid
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdAccountMaxBid extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      max_bid: 'max_bid'
    });
  }

}