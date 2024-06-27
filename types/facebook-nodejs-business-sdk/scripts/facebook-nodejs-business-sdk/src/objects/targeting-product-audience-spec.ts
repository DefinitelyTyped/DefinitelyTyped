import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingProductAudienceSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class TargetingProductAudienceSpec extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      exclusions: 'exclusions',
      inclusions: 'inclusions',
      product_set_id: 'product_set_id'
    });
  }

}