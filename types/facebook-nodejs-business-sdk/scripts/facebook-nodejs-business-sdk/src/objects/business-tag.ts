import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BusinessTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class BusinessTag extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name: 'name'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): BusinessTag {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}