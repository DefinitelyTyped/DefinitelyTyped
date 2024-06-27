import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductCatalogCategory
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductCatalogCategory extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      criteria_value: 'criteria_value',
      description: 'description',
      destination_uri: 'destination_uri',
      image_url: 'image_url',
      name: 'name',
      num_items: 'num_items',
      tokens: 'tokens'
    });
  }

  static get CategorizationCriteria() {
    return Object.freeze({
      brand: 'BRAND',
      category: 'CATEGORY',
      product_type: 'PRODUCT_TYPE'
    });
  }

}