import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogImageSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogImageSettings extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      carousel_ad: 'carousel_ad',
      single_ad: 'single_ad'
    });
  }

}