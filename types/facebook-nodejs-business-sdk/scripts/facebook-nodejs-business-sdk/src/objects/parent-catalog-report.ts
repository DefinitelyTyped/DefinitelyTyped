import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ParentCatalogReport
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ParentCatalogReport extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      purchase_conversion_value: 'purchase_conversion_value',
      purchases: 'purchases'
    });
  }

}