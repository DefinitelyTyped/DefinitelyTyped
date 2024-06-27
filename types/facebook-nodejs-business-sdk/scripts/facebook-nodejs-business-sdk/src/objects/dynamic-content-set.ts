import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DynamicContentSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class DynamicContentSet extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      business_id: 'business_id',
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): DynamicContentSet {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}