import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGUserCatalogProductVariant
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ShadowIGUserCatalogProductVariant extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      product_id: 'product_id',
      variant_name: 'variant_name'
    });
  }

}