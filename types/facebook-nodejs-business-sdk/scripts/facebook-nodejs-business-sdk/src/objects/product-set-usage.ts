import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductSetUsage
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ProductSetUsage extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      product_set: 'product_set',
      usage_type: 'usage_type'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ProductSetUsage {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}