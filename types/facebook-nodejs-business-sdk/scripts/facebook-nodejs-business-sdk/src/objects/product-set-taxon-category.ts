import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetTaxonCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductSetTaxonCategory extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      category_id: 'category_id',
      category_name: 'category_name',
      image_url: 'image_url'
    });
  }

}