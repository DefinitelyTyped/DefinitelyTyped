import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogFacets
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogFacets extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      facets: 'facets',
      item_count: 'item_count'
    });
  }

}