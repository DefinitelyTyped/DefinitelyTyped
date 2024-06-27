import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogUserActions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogUserActions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      actions: 'actions'
    });
  }

}