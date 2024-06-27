import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductVisualVariant
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductVisualVariant extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      items: 'items',
      unique_key: 'unique_key'
    });
  }

}