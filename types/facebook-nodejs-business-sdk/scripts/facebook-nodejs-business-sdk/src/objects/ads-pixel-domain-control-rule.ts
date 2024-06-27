import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelDomainControlRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelDomainControlRule extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      domain_list: 'domain_list',
      type: 'type'
    });
  }

}