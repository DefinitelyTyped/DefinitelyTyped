import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogImageSettingsInternal
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogImageSettingsInternal extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      carousel_ad: 'carousel_ad',
      shops_pdp: 'shops_pdp',
      single_ad: 'single_ad'
    });
  }

}