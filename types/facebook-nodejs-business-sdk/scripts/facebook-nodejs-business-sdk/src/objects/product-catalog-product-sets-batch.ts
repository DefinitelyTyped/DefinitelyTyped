import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogProductSetsBatch
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogProductSetsBatch extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      errors: 'errors',
      errors_total_count: 'errors_total_count',
      handle: 'handle',
      status: 'status'
    });
  }

}