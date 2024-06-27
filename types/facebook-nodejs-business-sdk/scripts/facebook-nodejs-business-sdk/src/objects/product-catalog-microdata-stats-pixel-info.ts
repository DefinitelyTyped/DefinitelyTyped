import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogMicrodataStatsPixelInfo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogMicrodataStatsPixelInfo extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      is_already_connected: 'is_already_connected',
      pixel_id: 'pixel_id'
    });
  }

}