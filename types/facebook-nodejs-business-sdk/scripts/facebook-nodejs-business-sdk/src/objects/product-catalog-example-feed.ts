import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogExampleFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogExampleFeed extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      example_feed: 'example_feed'
    });
  }

}