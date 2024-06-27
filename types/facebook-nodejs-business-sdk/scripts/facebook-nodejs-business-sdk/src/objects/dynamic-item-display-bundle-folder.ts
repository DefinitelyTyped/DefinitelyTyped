import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicItemDisplayBundleFolder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DynamicItemDisplayBundleFolder extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      categorization_criteria: 'categorization_criteria',
      id: 'id',
      name: 'name',
      product_catalog: 'product_catalog',
      product_set: 'product_set',
      valid_labels: 'valid_labels'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): DynamicItemDisplayBundleFolder {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}