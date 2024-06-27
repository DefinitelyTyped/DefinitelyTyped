import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductVariant
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductVariant extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      label: 'label',
      options: 'options',
      product_field: 'product_field'
    });
  }

}